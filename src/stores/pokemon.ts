import type { BasicResponse } from "../application/interfaces/pokemon"
import { PokeRepository } from "../application/repositories/pokemonRepository"
import { writable } from "svelte/store"
import { initialState } from "./models/pokemon"

const pokeRepository = new PokeRepository()

export  const pokemonStore =  writable(initialState) 

export async function getPokeIndex(total: number) {
    const response = await pokeRepository.getMetaPokeIndex(total)
    pokemonStore.update(obj => {
        return {...obj, pokeIndex: response}
    })
}

export async function getPokemons(listPokemons: BasicResponse[]){
    const response = await pokeRepository.getPokemons(listPokemons);
    pokemonStore.update(obj => {
        return {...obj, pokemons: response}
    })
}

