<script>
    import { X } from 'lucide-svelte';
    import { slide } from 'svelte/transition';
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';

    export let show = false;

    const logout = () => {

    }

</script>

{#if show}
<div transition:slide={{duration: 500}} class="container">
    <div class="close" on:click={() => show = false}><X /></div>
    <div class="item" on:click={() => goto(base)}>Home</div>
    <div class="item">
        My cars
    </div>
    <div class="item" on:click={() => {goto('/stats')}}>Stats</div>
    <form method="POST" action="?/logout"><input type="submit" value="Logout" class="item" /></form>
</div> 
{/if}

<style>
    .container {
        background: var(--white);
        color: var(--black);
        position: absolute;
        width: 100%;
        z-index:200;
    }

    .close {
        float: right;
    }
</style>
 