import type { Pokemon, PokemonSpecies } from "../../domain/entities/Pokemon"

export interface PokemonState{
    length: number,
    offset: number,
    loadData: number,
    hasMore: boolean,
    pokemons: Pokemon[]
}

export interface PokemonSpeciesState{
    load: boolean,
    pokemonSpecies: PokemonSpecies | null
}

export interface PokemonListState {
    load: boolean,
    listPokemon: BasicResponse[]
}


const pokemonSpecies: PokemonSpeciesState = {
    load: false,
    pokemonSpecies: null
}

const pokemonIndex: PokemonState= {
    length: 9,
    offset: 0,
    hasMore: true,
    loadData: 0,
    pokemons: [],
}

const pokemonList: PokemonListState = {
    load: false,
    listPokemon: []
} 


export {
    pokemonSpecies,
    pokemonIndex,
    pokemonList,
}
