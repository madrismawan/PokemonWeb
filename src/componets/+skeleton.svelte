<script lang="ts">
    export let length: number;
</script>

{#each Array(length) as _, index}
    <div class="card">
        <div class="skeleton h-[11.5rem]"></div>
        <div class="flex flex-col items-center space-y-3 mt-2 p-3 mb-2">
            <div class="skeleton h-6 rounded-3xl w-[60%]"></div>
            <div class="flex w-[60%] rounded-3xl justify-center space-x-2">
                <div class="skeleton h-5 w-[37%] rounded-3xl"></div>
                <div class="skeleton h-5 w-[37%] rounded-3xl"></div>
            </div>
            <div class="skeleton h-5 w-[38%] rounded-3xl"></div>
        </div>
    </div>
{/each}