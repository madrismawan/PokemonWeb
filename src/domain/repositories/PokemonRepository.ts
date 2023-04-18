import type { BasicResponse, PokeIndex, Pokemon } from "../entities/Pokemon";

export interface PokemonRepository {
    getPokeIndex(total: number): Promise<PokeIndex>
    getPokemons(listPokemons: BasicResponse[]): Promise<Pokemon[]>
    // getPokeSpecies(name: string)
}        