<script lang="ts">
	import { onMount } from "svelte";
	import type { an } from "vitest/dist/types-71ccd11d";

    export let path: string;
    let SvgComponentdata: any;


    function importSvg(path: string) {
        return import(path)
            .then((module) => {
                const { default: SvgComponent } = module;
                return SvgComponent;
            })
            .catch((err) => {
            console.error(`Error importing SVG: ${err}`);
            return null;
            });
    }

    function loadSvg(path: string) {
        const targetEl = document.getElementById('svg-container');

        importSvg(path).then((SvgComponent) => {
            SvgComponentdata = new SvgComponent();
        });
    }

    onMount(() => {
        loadSvg(`../../svg/poketype/${path}.svg`);
    });
</script>


{#if SvgComponentdata}
  <svelte:component this={SvgComponentdata} />
{/if}