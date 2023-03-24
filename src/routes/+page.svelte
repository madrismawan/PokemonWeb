<script lang="ts">
	import ApiService from "../services/+api";
	import type { PaginateMetaData, BasicResponse, Pokemon } from "../interfaces/+pokemon";
	import InputField from "../componets/+inputField.svelte";
	import PokeCard from "../componets/pokemon/+pokeCard.svelte";
	import { onMount } from 'svelte';

	const axios = new ApiService()

	let pokemons: Pokemon[]
	async function getPokemon(){
		try{
			const response: PaginateMetaData = await axios.get('/pokemon?offset=0&limit=9')
			const listPokemon: Promise<any>[]= response.results.map(async (pokemon: BasicResponse) => {
				try{
					return await axios.get('pokemon/'+pokemon.name)
				}catch(error: any){
					return error
				}
			})
			pokemons = await Promise.all(listPokemon)
			console.log(pokemons)
		}catch(error: any){
			console.log(error)
			return error
		}	
	}

	onMount( async () => {
		getPokemon()
	});
</script>

<svelte:head>
	<title>Pokedex V2 | Svelte</title>
	<meta name="description" content="this website pokedex" />
	<link rel="icon" type="svg" href="../svg/pokeball.svg" />
</svelte:head>

<section class="min-h-screen d-container font-montserrat">
	<section id="title">
		<h1 class="font-bold text-3xl text-start">Svelte Pokédex</h1>
	</section>
	<InputField></InputField>
	<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#if pokemons}
			{#each pokemons as pokemon, index}
				<PokeCard {pokemon}></PokeCard>
			{/each}
		{/if}
	</section>
</section>