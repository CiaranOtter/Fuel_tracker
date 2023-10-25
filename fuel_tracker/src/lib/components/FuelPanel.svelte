<script>
    import FuelItem from "./FuelItem.svelte";
    export let fuel;

</script>

<div class="container">
    {#each fuel as f}
     <FuelItem fuel={f} />   
    {/each}
</div>

<style>
    .container {
        height: 100vh;
        overflow-y: scroll;
    }
</style>