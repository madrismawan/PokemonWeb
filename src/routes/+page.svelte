<script lang="ts">
	import type { fromJSON } from "postcss";

	import ApiService from "../services/+api";
	import { onMount } from 'svelte';
	import type { PokemonList, Pokemon } from "../interfaces/+pokemon";
	import type { ApiResponse } from "../interfaces/+responseAPI"; 	

	const axios = new ApiService()
	$: pokemos = [];

	async function getPokemon(){
		const response = await axios.get('/pokemon')
		const listPokemon: PokemonList =  response.data as PokemonList
		const listDetailPokemon = listPokemon.results.map((pokemon: Pokemon)=> {
			return axios.get(pokemon.url)
		})

		const responseDetail = await Promise.all(listDetailPokemon)
		pokemos = responseDetail.map((pokemon) => {
				return pokemon.data
		})
		console.log(pokemos)
	}

	onMount( async () => {
		getPokemon()
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="min-h-screen font-mono">
	
	<section id="title">
		<h1 class="font-black text-xl font-mono">List Pokemon</h1>
	</section>

	<section id="search-pokemon">
		<input class="h-10 rounded-md w-full py-4 px-7" placeholder="Search Pokemon GO" />
	</section>

	<section>
		<section class="grid grid-cols-4 gap-4">
			{#each ['rismawna','maderisamwan'] as pokemon}
				<div class="shadow-md p-4 bg-slate-200 rounded-md ">
					<h1  class="capitalize font-semibold text-sm" >{pokemon}</h1>
				</div>	
			{/each}
		</section>
	</section>
</section>

<style>
	section {
		@apply mb-5;
	}
</style>


