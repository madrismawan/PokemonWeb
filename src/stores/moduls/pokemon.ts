import { writable } from "svelte/store"
import { PokemonService } from "../../application/pokemon"
import { pokemonSpecies, pokemonIndex , pokemonList, type PokemonState, type PokemonListState} from '../models/Pokemon'

const pokeService = new PokemonService()

export const statePokeIndex =  writable(pokemonIndex) 
export const statePokeSpecies =  writable(pokemonSpecies) 
export const statePokeList =  writable(pokemonList) 

export const actions = {
    getPokemons:async () => {
        let initState: PokemonState = pokemonIndex;
        const unsubscribe = statePokeIndex.subscribe(value => {
            initState = value;
        });

        const offset = initState.pokemons.length == 0 ? 0 : initState.offset +  initState.length 
        const resPokeIndex = await pokeService.getPokeIndex(offset,initState.length)
        const resPokemons = await pokeService.getPokemons(resPokeIndex.results);
        const hasMore: boolean = resPokemons.length > 0 ? true : false

        statePokeIndex.update(obj => {
            return {...obj, offset: offset, loadData: resPokemons.length, hasMore: hasMore}
        })

        // Make this components to load data delay
        resPokemons.forEach((pokemon, index) => {
            setTimeout(() => {
                statePokeIndex.update(obj => {
                    const pokemons = obj.pokemons
                    if(!pokemons.some((arrPokemon) => arrPokemon.id === pokemon.id )){
                        pokemons.push(pokemon)
                    }                    
                    return {...obj, pokemons: pokemons, loadData: obj.loadData - 1}

                })
            }, 750 * index);
        })
        unsubscribe()
    },
    getPokemonSpecies: async (id: number) => {
        statePokeSpecies.update(obj => {
            return {...obj, load: true}
        })
        const resPokemonSpecies = await pokeService.getPokeSpecies(id);
        statePokeSpecies.update(()=> {
            return {pokemonSpecies: resPokemonSpecies, load: false}
        })
    },
    getPokemonList: async () => {
        statePokeList.update(obj => {
            return {...obj, load: true}
        })
        const resPokeList = await pokeService.getListPokemon();
        statePokeList.update(() => {
            return {listPokemon: resPokeList, load: true}
        })

    },
    searchPokemon:async (keyword:string) => {
        let initState: PokemonListState = pokemonList;
        const unsubscribe = statePokeList.subscribe(value => {
            initState = value;
        });
        
        const found = initState.listPokemon.filter(pokemon => 
            Object.values(pokemon).some(value => 
                typeof value === 'string' && value.includes(keyword)
            )   
        )
        statePokeIndex.update(obj => {
            return {...obj, pokemons: [], loadData: found.length, hasMore: false}
        })

        const resPokemons = await pokeService.getPokemons(found);
        resPokemons.forEach((pokemon, index) => {
            setTimeout(() => {
                statePokeIndex.update(obj => {
                    const pokemons = obj.pokemons
                    if(!pokemons.some((arrPokemon) => arrPokemon.id === pokemon.id )){
                        pokemons.push(pokemon)
                    }                    
                    if(!pokemons.some((arrPokemon) => arrPokemon.id === pokemon.id )){
                        pokemons.push(pokemon)
                    }                    
                    return {...obj, pokemons: pokemons, loadData: obj.loadData - 1}

                })
            }, 750 * index);
        })
        unsubscribe()
    }
}

export default {
    statePokeIndex,
    statePokeSpecies,
    statePokeList,
    actions
}