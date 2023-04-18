
<script lang="ts">
	import { changeMeasurement, colorPokemon, iconPokemon, imagePokemon, type Pokemon } from "../../domain/entities/Pokemon";
	import { leftPadNumber } from "../../lib/leftPadNumber";
    import WeightIcon from '../../svg/icon/weight.svg'
    import MeasureIcon from '../../svg/icon/measure.svg'
	import Modal from "./+modal.svelte";
    export let pokemon: Pokemon;
    let showModal: boolean = false

    function handleKeyDown(event: KeyboardEvent, func: () => void) {
        if (event.key === 'Enter' || event.key === ' ') {
            func();
        } 
    } 
    function openModal(){
        showModal = true
        document.body.style.overflow = 'hidden';
    }
</script>

{#if showModal}
    <Modal bind:showModal {pokemon}/>
{/if}

<div class="transition card hover:-translate-y-1 hover:scale-105 hover:cursor-pointer" on:click={openModal} on:keydown={(event) => handleKeyDown(event,openModal)}>
    <div class="relative flex justify-center h-[70%] bg-opacity-10 -z-20 " style={`background-color: ${colorPokemon(pokemon.types[0].type.name,"d4")};`}>
        <p class="absolute text-6xl font-[550] -z-10 opacity-20 text-space-4 tracking-[0.5rem] text-black top-4">{leftPadNumber(pokemon.id,3)}</p>
        <div class="absolute bg-gray-200 h-[7rem] w-[7rem] rounded-full opacity-40 -z-10 bottom-5"></div>
        <img alt="icon" class="flex w-[10rem] sm:-[11.5rem] h-full px-2 pt-8 pb-4" src={imagePokemon(pokemon.id)}/>
    </div>
    <div class="p-3 text-center space-y-1">
        <h1 class="capitalize font-bold text-3xl">{pokemon.name}</h1>
        <div class="flex space-x-4 font-semibold justify-center items-center text-sm pb-1">
            <div class="flex space-x-1">
                <img class="fill-slate-500 w-4" alt="weight" src={WeightIcon}>
                <span>{changeMeasurement(pokemon.height)} Kg</span>
            </div>
            <div class="flex space-x-1">
                <img class="fill-slate-500 w-4" alt="Measure" src={MeasureIcon}>
                <span>{changeMeasurement(pokemon.weight)} m</span>
            </div>
        </div>
        <div class="flex space-x-1 justify-center pb-3 text-xs">
            {#each pokemon.types as type}
                <div class="flex space-x-2 rounded-md shadow-md py-1 px-2 items-center" style={`background-color: ${colorPokemon(type.type.name,"d2")};`}>
                    {@html iconPokemon(type.type.name)}
                    <p class="uppercase text-xs font-normal text-white tracking-[0.1rem]"> {type.type.name}</p>
                </div>	
            {/each}
        </div>
    </div>
</div>