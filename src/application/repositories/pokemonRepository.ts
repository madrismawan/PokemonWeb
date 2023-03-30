import type { BasicResponse, PaginateMetaData, Pokemon } from "../interfaces/pokemon"
import ApiService from "../services/api"

const api = new ApiService()

export class PokeRepository {
    async getMetaPokeIndex(total: number): Promise<PaginateMetaData> {
        const response: PaginateMetaData = await api.get('/pokemon?offset=0&limit='+total)
        return response
    }

    async getPokemons(listPokemons: BasicResponse[]): Promise<Pokemon[]>{
        const getPokemons = listPokemons.map(async (pokemon: BasicResponse) => {
            try{
                return await api.get('pokemon/'+pokemon.name)
            }catch(error: any){
                return error
            }
        })
        const pokemons: Pokemon[] = await Promise.all(getPokemons) 
        return pokemons;         
    }

}