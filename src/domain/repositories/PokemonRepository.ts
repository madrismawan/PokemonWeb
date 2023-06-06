import type { BasicResponse, PokeIndex, Pokemon, PokemonSpecies } from "../entities/Pokemon";

export interface PokemonRepository {
    getPokeIndex(offset: number, total: number): Promise<PokeIndex>
    getPokemons(listPokemons: BasicResponse[]): Promise<Pokemon[]>
    getPokeSpecies(id: number): Promise<PokemonSpecies>
}        