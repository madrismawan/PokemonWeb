import { writable } from "svelte/store"
import { initialStatePokemon } from "./statePoke"
import { PokemonService } from "../../application/pokemon"
import type { BasicResponse } from "../../domain/entities/Pokemon"

const pokeService = new PokemonService()

export const pokemonStore =  writable(initialStatePokemon) 

export async function getPokeIndex(total: number) {
    const response = await pokeService.getPokeIndex(total)
    pokemonStore.update(obj => {
        return {...obj, pokeIndex: response}
    })
    return response
}

export async function getPokemons(listPokemons: BasicResponse[]){
    const response = await pokeService.getPokemons(listPokemons);
    pokemonStore.update(obj => {
        return {...obj, pokemons: response}
    })
}

