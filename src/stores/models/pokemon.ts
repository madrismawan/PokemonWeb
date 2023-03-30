import type { PaginateMetaData, Pokemon } from "../../application/interfaces/pokemon";

export interface PokemonState{
    pokeIndex: PaginateMetaData
    pokemons: Pokemon[]
}

export const initialState: PokemonState= {
    pokeIndex: {
        count: 0,
        next: '',
        previous: '',
        results: [],
    },
    pokemons: []
}

