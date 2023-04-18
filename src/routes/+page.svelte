<script lang="ts">
	import InputField from "../componets/+inputField.svelte";
	import PokeCard from "../componets/pokemon/+pokeCard.svelte";
	import { onMount } from 'svelte';
	import Skeleton from "../componets/+skeleton.svelte";
	import pokemon, { state } from "../stores/moduls/pokemon";

	const length: number = 9

	async function getPokemon(total: number) {
		const response = await pokemon.actions.getPokeIndex(total)
		if(response.results.length > 0){
			await pokemon.actions.getPokemons(response.results)	
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
		{#if $state.pokemons.length == 0}
			<Skeleton length={length}/>
		{/if}
		{#if $state.pokemons.length}
			{#each $state.pokemons as pokemon, index}
				<div class="animate__animated  animate__backInUp ">
					<PokeCard {pokemon}/>
				</div>
			{/each}
		{/if}
	</section>
</section>