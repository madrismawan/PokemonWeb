import type { BasicResponse, PokeIndex, Pokemon } from "../entities/Pokemon";

export interface PokemonRepository {
    getPokeIndex(offset: number, total: number): Promise<PokeIndex>
    getPokemons(listPokemons: BasicResponse[]): Promise<Pokemon[]>
    // getPokeSpecies(name: string)
}        