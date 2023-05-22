<script lang="ts">
	import { onMount } from 'svelte';
	import InputField from "../componets/+inputField.svelte";
	import PokeCard from "../componets/pokemon/+pokeCard.svelte";
	import Skeleton from "../componets/+skeleton.svelte";
	import pokemon, { state } from "../stores/moduls/pokemon";
	import InfiniteScroll from '../componets/infiniteScroll.svelte';
	let hasMore: boolean;

	onMount( async () => {
		await pokemon.actions.getPokemons()
	});

	$: {
		hasMore = $state.loadData == 0 ? false : true
	}

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
		{#if $state.pokemons.length !== 0}
			{#each $state.pokemons as pokemon}
				<div class="animate__animated animate__fadeIn">
					<PokeCard {pokemon}/>
				</div>
			{/each}
		{/if}
		<Skeleton length={$state.loadData}/>
		<InfiniteScroll
			hasMore={hasMore}
			threshold={100}
			on:loadMore={() => { pokemon.actions.getPokemons()}} />

	</section>
</section>