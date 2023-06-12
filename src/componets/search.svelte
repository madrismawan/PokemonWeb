<script lang="ts">
	import pokemon, {statePokeIndex} from "../stores/moduls/pokemon";
    let keyword: string
    
    function _search(){
        if(keyword !== undefined && keyword !== ''){
            pokemon.actions.searchPokemon(keyword)
        }else{
            if(!$statePokeIndex.hasMore){
                statePokeIndex.update(obj => {
                    return {...obj, pokemons: [], loadData: 0, hasMore: true}
                })
                pokemon.actions.getPokemons()
            }
        }
    }
</script>

<section id="search-pokemon" class="flex pb-3 space-x-3 md:w-4/5">
    <input  disabled={$statePokeIndex.loadData > 0} bind:value={keyword} on:change={_search} class="h-10 rounded-lg w-full py-4 px-7 shadow-sm" placeholder="Search Pokemon GO" />
    <button disabled={$statePokeIndex.loadData > 0} on:click={_search} class="px-7 h-10 rounded-lg justify-center bg-red-500 text-white shadow-sm" type="button" >Search</button>
</section>