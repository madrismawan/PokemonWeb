import { writable } from "svelte/store"
import { PokemonService } from "../../application/pokemon"
import type { Pokemon } from "../../domain/entities/Pokemon"

const pokeService = new PokemonService()
interface PokemonState{
    length: number,
    offset: number,
    loadData: number,
    pokemons: Pokemon[]
}

const initialState: PokemonState= {
    length: 9,
    offset: 0,
    loadData: 0,
    pokemons: [],
}

export const state =  writable(initialState) 

export const actions = {
    getPokemons:async () => {
        let statePokemon: PokemonState = initialState;
        const unsubscribe = state.subscribe(value => {
            statePokemon = value;
        });

        const offset = statePokemon.pokemons.length == 0 ? 0 : statePokemon.offset +  statePokemon.length 
        const resPokeIndex = await pokeService.getPokeIndex(offset,statePokemon.length)
        const resPokemons = await pokeService.getPokemons(resPokeIndex.results);

        state.update(obj => {
            return {...obj, offset: offset, loadData: resPokemons.length}
        })

        resPokemons.forEach((pokemon, index) => {
            setTimeout(() => {
                state.update(obj => {
                    const pokemons = obj.pokemons
                    pokemons.push(pokemon)
                    return {...obj, pokemons: pokemons, loadData: obj.loadData - 1}
                })
            }, 800 * index);
        })
        unsubscribe()
    }
}

export default {
    state,
    actions
}