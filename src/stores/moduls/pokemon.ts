import { writable } from "svelte/store"
import { PokemonService } from "../../application/pokemon"
import type { BasicResponse } from "../../domain/entities/Pokemon"
import type { PokeIndex, Pokemon } from "../../domain/entities/Pokemon"

const pokeService = new PokemonService()
interface PokemonState{
    pokeIndex: PokeIndex
    pokemons: Pokemon[]
}

const initialState: PokemonState= {
    pokeIndex: {
        count: 0,
        next: '',
        previous: '',
        results: [],
    },
    pokemons: []
}

export const state =  writable(initialState) 

export const actions = {
    getPokeIndex: async (total :number) => {
        const response = await pokeService.getPokeIndex(total)
        state.update(obj => {
            return {...obj, pokeIndex: response}
        })
        return response
    },
    getPokemons:async (listPokemons: BasicResponse[]) => {
        const response = await pokeService.getPokemons(listPokemons);
        state.update(obj => {
            return {...obj, pokemons: response}
        })
    }
}

export default {
    state,
    actions
}