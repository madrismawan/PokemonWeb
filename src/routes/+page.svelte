<script lang="ts">
	import InputField from "../componets/+inputField.svelte";
	import PokeCard from "../componets/pokemon/+pokeCard.svelte";
	import { onMount } from 'svelte';
	import { getPokeIndex, getPokemons, pokemonStore } from "../stores/pokemon/index.";
	import Skeleton from "../componets/+skeleton.svelte";

	async function getPokemon(total: number) {
		const response = await getPokeIndex(total)
		if(response.results.length > 0){
			await getPokemons(response.results)	
		}
	}

	onMount( async () => {
		await getPokemon(9)
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
		{#if $pokemonStore.pokemons}
			{#each $pokemonStore.pokemons as pokemon, index}
				<PokeCard {pokemon}></PokeCard>
				<Skeleton/>
			{/each}
		{/if}


	</section>

	<!-- <button on:click={() => (showModal = true)}>
		show modal
	</button> -->
</section>