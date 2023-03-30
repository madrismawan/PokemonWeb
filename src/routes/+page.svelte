<script lang="ts">
	import InputField from "../componets/+inputField.svelte";
	import PokeCard from "../componets/pokemon/+pokeCard.svelte";
	import { getPokeIndex, getPokemons, pokemonStore } from "../stores/pokemon";
	import { onMount } from 'svelte';

	onMount( async () => {
		await getPokeIndex(9)
		await getPokemons($pokemonStore.pokeIndex.results)	
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
			{/each}
		{/if}
	</section>
</section>