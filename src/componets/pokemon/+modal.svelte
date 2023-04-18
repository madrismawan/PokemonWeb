
<script lang="ts">
	import { onMount } from 'svelte';
	import { colorPokemon, imagePokemon, type Pokemon } from '../../domain/entities/Pokemon';
	import { leftPadNumber } from '$lib/leftPadNumber';

    export let showModal: boolean; // boolean
    export let pokemon: Pokemon; // boolean
	let dialog: HTMLDialogElement; // HTMLDialogElement

    $: if (dialog && showModal) dialog.showModal();
    function close(){
        showModal = false
        document.body.style.overflow = 'auto';
    }

    onMount( async () => {
        console.log(pokemon)
	});
</script>

<dialog
    class="!p-0"
    style={`background-color: ${colorPokemon(pokemon.types[0].type.name,"")};`}
    bind:this={dialog}
    on:close={close}
    on:click|self={() => dialog.close()}
    on:keydown={close}
    >
    <section class="flex flex-col !m-0 relative">
        <div class="flex flex-col text-white px-3 pt-3" >
            <p class="text-xs">{leftPadNumber(pokemon.id,3)}</p>
            <h3 class="capitalize font-semibold opacity-70">{pokemon.name}</h3>
            <div class="relative flex justify-center">
                <h3 class="absolute text-center capitalize font-semibold">{pokemon.name}</h3>
                <div class="absolute bg-gray-200 h-[7rem] w-[7rem] -z-10 rounded-full opacity-40 bottom-5"></div>
                <img class=" w-[40%] sm:w-[50%]" alt={`pitcure-${pokemon.name}`} src={imagePokemon(pokemon.id)}>
            </div>
        </div>
        <div class="rounded-2xl p-4 bg-white">
            <h2 class="font-semibold">Pokémon Data</h2>
            <p class="font-medium">Pokémon Data</p>
            <div class="grid grid-cols-2">
                <p class="font-medium">Pokémon Data</p>
                <p class="font-medium">Pokémon Data</p>

            </div>
        </div>
    </section>
</dialog>