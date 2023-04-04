<script lang="ts">
	import InputField from "../componets/+inputField.svelte";
	import PokeCard from "../componets/pokemon/+pokeCard.svelte";
	import { onMount } from 'svelte';
	import { getPokeIndex, getPokemons, pokemonStore } from "../stores/pokemon/index.";
	import Skeleton from "../componets/+skeleton.svelte";

	const length: number = 9

	async function getPokemon(total: number) {
		const response = await getPokeIndex(total)
		if(response.results.length > 0){
			await getPokemons(response.results)	
		}
	}

	onMount( async () => {
		await getPokemon(length)
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

	<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
		{#if $pokemonStore.pokemons.length == 0}
			<Skeleton length={length}/>
		{/if}
		{#if $pokemonStore.pokemons}
			{#each $pokemonStore.pokemons as pokemon, index}
				<div class="animate__animated  animate__backInUp ">
					<PokeCard {pokemon}/>
				</div>
			{/each}
		{/if}
	</section>
</section>