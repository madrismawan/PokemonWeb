<script lang="ts">
	import { socialMedia } from '$lib/socialMedia';
	import SocialMedia from '../componets/socialMedia.svelte';
</script>

<footer class="container-footer font-montserrat mb-4 justify-between text-sm space-y-3 sm:flex py-3">
    <p class="sm:w-72">
        Fetch data from The Pokémon Company using API - 
        <a class="text-blue-800 underline underline-offset-2" href="https://pokeapi.co/">pokeapi.co</a>
    </p>
    <div class="flex space-x-2 content-center">
        {#each socialMedia as social}
            <SocialMedia {social}/>
        {/each}
    </div>
</footer>