<script lang="ts">
    import { onDestroy, createEventDispatcher } from "svelte";

    export let threshold: number = 0;
    export let horizontal: boolean = false;
    export let hasMore: boolean = true;
    
    const dispatch = createEventDispatcher();
    let elementScroll: HTMLElement;
    let isLoadMore: boolean = false;
    let component: HTMLElement;

    $: if (component || elementScroll) {
            console.log(component)
            console.log(elementScroll)
            const element = elementScroll ? elementScroll : component.parentNode as HTMLElement;

            element.addEventListener("scroll", onScroll);
            element.addEventListener("resize", onScroll);
    }
    

    const onScroll = (e: Event) => {
        const element = e.target as HTMLElement;

        const offset = horizontal
            ? element.scrollWidth - element.clientWidth - element.scrollLeft
            : element.scrollHeight - element.clientHeight - element.scrollTop;

            if (offset <= threshold) {
                console.log(offset <= threshold)
                if (!isLoadMore && hasMore) {
                    dispatch("loadMore");
                }
                isLoadMore = true;
            } else {
                isLoadMore = false;
            }
    };

    onDestroy(() => {
        if (component || elementScroll) {
            console.log(component)
            console.log(elementScroll)
            const element = elementScroll ? elementScroll : component.parentNode as HTMLElement;

            element.removeEventListener("scroll", onScroll);
            element.removeEventListener("resize", onScroll);
        }
    });
</script>

<div bind:this={component}  > Made Risamwan</div>