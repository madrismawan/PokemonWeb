
<script lang="ts">
	import type { Pokemon, PokeTypeDetail } from "../../application/interfaces/pokemon";
	import { leftPadNumber } from "../../application/services/leftPadNumber";
	import { pokemonTypes } from "../../application/services/pokemonType";
    import WeightIcon from '../../svg/icon/weight.svg'
    import MeasureIcon from '../../svg/icon/measure.svg'
    export let pokemon: Pokemon;

    function pokemonType(type: string): PokeTypeDetail{
        return pokemonTypes[type]
    }

    function handleKeyDown(event: KeyboardEvent, func: () => void) {
        if (event.key === 'Enter' || event.key === ' ') {
            func();
        }
    }
    function testing(){
        console.log('Made Risamwan')
    }

</script>

<div class="transition card hover:-translate-y-1 hover:scale-105" on:click={testing} on:keydown={(event) => handleKeyDown(event,testing)}>
    <div class="relative flex justify-center h-[70%] bg-opacity-10 -z-20 " style={`background-color: ${pokemonType(pokemon.types[0].type.name).medium}d3;`}>
        <p class=" absolute text-6xl font-[550] -z-10 opacity-30 text-space-4 tracking-[0.3rem] text-black top-4">{leftPadNumber(pokemon.id,3)}</p>
        <div class="absolute bg-gray-300 h-[9rem] w-[9rem] rounded-full opacity-50 -z-10 bottom-5"></div>
        <img alt="icon" class="flex w-[13.5rem] h-full px-2 pt-8 pb-4" src={pokemon.sprites.other.dream_world.front_default}/>
    </div>
    <div class="p-3 text-center space-y-3">
        <h1 class="capitalize font-bold text-3xl">{pokemon.name}</h1>
        <div class="flex space-x-5 font-semibold justify-center items-center">
            <div class="flex space-x-1">
                <img class="fill-slate-500" alt="weight" src={WeightIcon}>
                <span>{pokemon.height / 10} Kg</span>
            </div>
            <div class="flex space-x-1">
                <img class="fill-slate-500" alt="Measure" src={MeasureIcon}>
                <span>{pokemon.weight / 10} m</span>
            </div>
        </div>
        <div class="flex space-x-2 justify-center pb-3">
            {#each pokemon.types as type}
                <div class="flex space-x-2 rounded-2xl shadow-md py-1 px-2" style={`background-color: ${pokemonType(type.type.name).light};`}>
                    {@html pokemonType(type.type.name).icon}
                    <p class="uppercase text-xs font-normal text-white tracking-[0.2rem]"> {type.type.name}</p>
                </div>	
            {/each}
        </div>
    </div>
</div>
