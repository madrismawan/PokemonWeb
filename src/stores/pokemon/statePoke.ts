import type { PokeIndex, Pokemon } from "../../domain/entities/Pokemon"

export interface PokemonState{
    pokeIndex: PokeIndex
    pokemons: Pokemon[]
}

export const initialStatePokemon: PokemonState= {
    pokeIndex: {
        count: 0,
        next: '',
        previous: '',
        results: [],
    },
    pokemons: []
}

