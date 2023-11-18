<script>
    export let show;
    import { clickOutside } from "$helpers/clickOutsode";
    import { slide } from "svelte/transition";

    
</script>

{#if show}
<div class="menu-container" use:clickOutside on:click_outside={() => show = false} transition:slide={{duration: 500}}>
    <div class="item">edit</div>
    <div class="item">delete</div>
</div>
{/if}

<style>
    .menu-container {
        background-color: var(--white);
        color: var(--black);
        padding: 10px;
        position: absolute;
        left: 100%;
        transform: translateX(-120%);
        border-radius: 5px;
    }

    .item {
        padding: 5px 10px
    }
    .item:hover {
        border-bottom: 1px solid var(--lightgray);
    }
</style>