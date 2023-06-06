import type { BasicResponse, PokeIndex, Pokemon, PokemonSpecies } from "../domain/entities/Pokemon";
import type { PokemonRepository } from "../domain/repositories/PokemonRepository";
import { ApiService } from "../services/apiService";

const api = new ApiService()

export class PokemonService implements PokemonRepository {
  public async getPokeIndex(offset:number,total: number): Promise<PokeIndex>{
    try{
      const response: PokeIndex = await api.get(`/pokemon?offset=${offset}&limit=${total}`) 
      return response
    }catch(error: any){
      return error
    }
  }

  public async getPokemons(listPokemons: BasicResponse[]): Promise<Pokemon[]> {
    const getPokemons: Promise<any>[] = listPokemons.map(async (pokemon: BasicResponse) => {
      return await api.get('pokemon/'+pokemon.name)
    })
    try{
      const pokemons: Pokemon[] = await Promise.all(getPokemons) 
      return pokemons;
    }catch(error: any){
      return error
    }
  }

  public async getPokeSpecies(id: number): Promise<PokemonSpecies> {
    try{
      const pokemonSpeceis: PokemonSpecies = await api.get(`pokemon-species/${id}`) 
      return pokemonSpeceis;
    }catch(error: any){
      return error
    }
  }
}