<script lang="ts">
	import './styles.css';
	import "../app.css";
	import 'animate.css';
	import Header from '../layouts/+header.svelte';
	import Footer from '../layouts/+footer.svelte';
	import { onMount } from 'svelte';

	let loadScreen: boolean = true 

	onMount( async () => {
		setTimeout(()=> {
			loadScreen = false
		}, 1000)
	});
</script>


{#if loadScreen}
	<div class="min-h-screen w-full bg-red-500 ">
		<div class="w-full h-screen flex items-center justify-center">
			<img class="w-[20%] md:w-[5%]  animate-spin" src="/assets/svg/pokeball.svg" alt="icon pokeball">
		</div>	
	</div>
{:else}
	<div class="app scroll-smooth">
		<Header></Header>
		<main class="pb-4 overflow-auto">
			<slot />
		</main>
		<Footer/>
	</div>	
{/if}