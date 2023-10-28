<script>
    import { X } from 'lucide-svelte';
    import { slide } from 'svelte/transition'

    export let show = false;

</script>

{#if show}
<div transition:slide={{duration: 500}} class="container">
    <div class="close" on:click={() => show = false}><X /></div>
    <div class="item">
        My cars
    </div>
    <div class="item">Logout</div>
</div> 
{/if}

<style>
    .container {
        background: var(--white);
        color: var(--black);
    }
</style>
 