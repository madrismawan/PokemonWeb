import { writable } from "svelte/store"
import { PokemonService } from "../../application/pokemon"
import type { Pokemon, PokemonSpecies } from "../../domain/entities/Pokemon"

const pokeService = new PokemonService()
interface PokemonState{
    length: number,
    offset: number,
    loadData: number,
    hasMore: boolean,
    pokemons: Pokemon[]
}

interface PokemonSpeciesState{
    load: boolean,
    pokemonSpecies: PokemonSpecies | null
}

const pokemonSpecies: PokemonSpeciesState = {
    load: false,
    pokemonSpecies: null
}

const initialState: PokemonState= {
    length: 9,
    offset: 0,
    hasMore: true,
    loadData: 0,
    pokemons: [],
}

export const state =  writable(initialState) 
export const statePokeSpecies =  writable(pokemonSpecies) 

export const actions = {
    getPokemons:async () => {
        let initState: PokemonState = initialState;
        const unsubscribe = state.subscribe(value => {
            initState = value;
        });

        const offset = initState.pokemons.length == 0 ? 0 : initState.offset +  initState.length 
        const resPokeIndex = await pokeService.getPokeIndex(offset,initState.length)
        const resPokemons = await pokeService.getPokemons(resPokeIndex.results);
        const hasMore: boolean = resPokemons.length > 0 ? true : false

        state.update(obj => {
            return {...obj, offset: offset, loadData: resPokemons.length, hasMore: hasMore}
        })

        // Make this components to load data delay
        resPokemons.forEach((pokemon, index) => {
            setTimeout(() => {
                state.update(obj => {
                    const pokemons = obj.pokemons
                    if(!pokemons.some((arrPokemon) => arrPokemon.id === pokemon.id )){
                        pokemons.push(pokemon)
                    }                    
                    return {...obj, pokemons: pokemons, loadData: obj.loadData - 1}

                })
            }, 750 * index);
        })
        unsubscribe()
    },
    getPokemonSpecies: async (id: number) => {
        let initState: PokemonSpeciesState = pokemonSpecies;
        const unsubscribe = statePokeSpecies.subscribe(value => {
            initState = value;
        });
        statePokeSpecies.update(obj => {
            return {...obj, load: true}
        })
        const resPokemonSpecies = await pokeService.getPokeSpecies(id);
        statePokeSpecies.update(obj => {
            return {pokemonSpecies: resPokemonSpecies, load: false}
        })
        unsubscribe()
    }
}

export default {
    state,
    statePokeSpecies,
    actions
}