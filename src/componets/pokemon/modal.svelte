
<script lang="ts">
	import { onMount } from 'svelte';
	import { colorPokemon, imagePokemon, changeMeasurement, genderPrecentage, type Pokemon } from '../../domain/entities/Pokemon';
	import { leftPadNumber } from '$lib/leftPadNumber';
	import pokemonState, {statePokeSpecies} from "../../stores/moduls/pokemon";

    export let showModal: boolean; // boolean
    export let pokemon: Pokemon; // boolean
	let dialog: HTMLDialogElement; // HTMLDialogElement

    $: if (dialog && showModal) dialog.showModal();
    function close(){
        showModal = false
        document.body.style.overflow = 'auto';
    }
    onMount( async () => {
        await pokemonState.actions.getPokemonSpecies(pokemon.id)
        console.log(pokemon)
        console.log($statePokeSpecies.pokemonSpecies)
    });
</script>

<dialog
    class="!p-0 border-0"
    style={`background-color: ${colorPokemon(pokemon.types[0].type.name,"")};`}
    bind:this={dialog}
    on:close={close}
    on:click|self={() => dialog.close()}
    on:keydown={close}
    >
    <section class="flex flex-col !m-0 relative border-0">
        <div class="flex flex-col text-white px-3 pt-3" >
            <p class="text-xs">{leftPadNumber(pokemon.id,3)}</p>
            <h3 class="capitalize font-semibold">{pokemon.name}</h3>
            <div class="relative flex flex-col justify-center items-center">
                <h3 class="text-center capitalize font-semibold">{pokemon.name}</h3>
                <div class="absolute bg-gray-200 h-[7rem] w-[7rem] -z-10 rounded-full opacity-40 bottom-5"></div>
                <img class=" w-[40%] sm:w-[50%]" alt={`pitcure-${pokemon.name}`} src={imagePokemon(pokemon.id)}>
            </div>1 
        </div>
        <div class="rounded-2xl px-8 py-4 bg-white text-xs">
            <h2 class="font-semibold">Pokémon Data</h2>
            <p class="font-light">{$statePokeSpecies.pokemonSpecies?.flavor_text_entries[0].flavor_text}</p>
            <p>
                {genderPrecentage($statePokeSpecies.pokemonSpecies?.gender_rate ?? -1)}
            </p>
            <div class="grid grid-cols-2 mt-2 gap-1 font-extralight">
                <p>Height</p>
                <p>{changeMeasurement(pokemon.height)}.m</p>
                <p>Weight</p>
                <p>{changeMeasurement(pokemon.weight)} Kg</p>
            </div>
        </div>
    </section>
</dialog>