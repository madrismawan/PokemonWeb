import type { BasicResponse, PokeIndex, Pokemon, PokemonSpecies } from "../entities/Pokemon";

export interface PokemonRepository {
    getListPokemon(): Promise<BasicResponse[]>
    getPokeIndex(offset: number, total: number): Promise<PokeIndex>
    getPokemon(): Promise<BasicResponse[]>
    getPokemons(listPokemons: BasicResponse[]): Promise<Pokemon[]>
    getPokeSpecies(id: number): Promise<PokemonSpecies>
}        