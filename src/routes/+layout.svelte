<script>
	import './styles.css';
	import "../app.css";
	import 'animate.css';
	import Header from '../layouts/+header.svelte';
	import Footer from '../layouts/+footer.svelte';
	import { onMount } from 'svelte';
    import Pokeball from '../svg/pokeball.svg'

	
	// let loadScreen: boolean = false 

	
	onMount( async () => {
	});
</script>


<!-- <div class="min-h-screen w-full bg-red-500 ">	
    <img class="w-7 h-7 flex transition hover:duration-300 hover:`rotate-180" src={Pokeball} alt="icon pokeball">

	<div class="transition duration-300 rotate-180">

	</div>
</div> -->




<div class="app scroll-smooth">
	<Header></Header>
	<main class="pb-4">
		<slot />
	</main>
	<Footer/>
</div>
