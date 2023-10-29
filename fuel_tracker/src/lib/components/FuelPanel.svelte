<script>
    import FuelItem from "./FuelItem.svelte";
    export let fuel;
    export let refresh;

</script>

<div class="container">
    {#each fuel as f}
     <FuelItem fuel={f} refresh={refresh}/>   
    {/each}
</div>

<style>
    .container {
        height: 80vh;
        overflow-y: scroll;
    }
</style>