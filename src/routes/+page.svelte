<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import InputField from "../componets/search.svelte";
	import PokeCard from "../componets/pokemon/pokeCard.svelte";
	import Skeleton from "../componets/skeleton.svelte";
	import pokemon, { statePokeIndex } from "../stores/moduls/pokemon";
	
	function handleScroll() {
		const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
		if (isAtBottom && $statePokeIndex.loadData === 0) {
			pokemon.actions.getPokemons();
		}
	}

	onMount( async () => {
		await pokemon.actions.getPokemons()
		window.addEventListener('scroll', handleScroll);
	});

	afterUpdate(() => {
		if (!$statePokeIndex.hasMore) {
			window.removeEventListener('scroll', handleScroll);
		}else{
			window.addEventListener('scroll', handleScroll);
		}
	});
</script>

<svelte:head>
	<title>Pokedex V2 | Svelte</title>
	<meta name="description" content="this website pokedex" />
	<link rel="icon" type="svg" href="/assets/svg/pokeball.svg" />
</svelte:head>

<section class="min-h-screen d-container font-montserrat">
	<section id="title">
		<h1 class="font-bold text-3xl text-start">Svelte Pokédex</h1> 
	</section>
	<InputField></InputField>

	<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
		{#if $statePokeIndex.pokemons.length !== 0}
			{#each $statePokeIndex.pokemons as pokemon}
				<div class="animate__animated animate__fadeIn">
					<PokeCard {pokemon}/>
				</div>
			{/each}
		{/if}
		{#if $statePokeIndex.loadData > 0}				
			<Skeleton length={$statePokeIndex.loadData}/>
		{/if}
	</section>
</section>