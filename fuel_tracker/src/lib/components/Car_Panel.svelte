<script>
    import { CarFuel } from "$classes/Cars_Fuel";
    import { onMount } from "svelte";
    import FuelPanel from "./FuelPanel.svelte";
    import { PlusCircle } from 'lucide-svelte';
    import { goto } from '$app/navigation';
    import { init_binding_group } from "svelte/internal";

    export let cars;
    let promise;
    export let profile_height;
    let top_menu_height;
    let window_height;

    let active_car;
    if (cars.length > 0) {
        active_car = CarFuel(cars[0])
    }   
    $: panel_height = window_height - profile_height - top_menu_height;

    onMount( async () => {
        promise = active_car.fetch_fuel();
    })

    const refresh = () => {
        console.log("refreshing")
        promise = active_car.fetch_fuel();
    }
    const select = (item) => {
        active_car = CarFuel(item);
        promise = active_car.fetch_fuel();
    }

    let bar_height = 0;
</script>

<svelte:window bind:innerHeight={window_height} />

<div class="container" bind:clientHeight={top_menu_height }>
    <div class="tab-container">
        {#each cars as c}
        <div class="tab {(c.id== active_car.id) ? 'active' : ''}"
            on:click={() => select(c)}
        >{c.name}</div>
        {/each}
        <div class="tag add-icon" on:click={() => {
            goto('cars/add')
        }} bind:clientHeight={bar_height}><PlusCircle size={bar_height - 25} /></div>
    </div>

    <div class="data-container">
        {#if cars.length <= 0}
            <div class="info">No cars yet</div>
        {:else}
        <div class="add-button" on:click={() => {
            goto(`add/${active_car.id}`)
        }}>Add new fuel</div>
        {#await promise}
            <p>loading...</p>
        {:then p}
        <FuelPanel fuel={active_car.fuel_items} refresh={refresh} height={panel_height}/>
        {/await}
        {/if}
    </div>
</div>





<style>

    .add-icon {
        /* border: 1px solid red; */
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
    .add-button {
        background: var(--pink);
        color: var(--black);
        width: 60%;
        max-width: 300px;
        margin: auto;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
    }
    .tab-container {
        display: flex;
        flex-direction: row;
        margin: auto;
        width: fit-content;
        height: 70px;
    }

    .tab {
        border: 1px solid var(--lightgray);
        width: fit-content ;
        padding: 10px 25px;
        border-radius: 5px;
        margin: 10px;
        transition: background 0.2s, border 0.2s;
    }

    .tab:hover {
        background: var(--red);
        color: var(--black);
        border-color: var(--red);
    }

    .active {
        background: var(--orange);
        color: var(--black);
        border-color: var(--orange);
    }
    .container {
        margin: auto;
        /* border: 1px solid var(--red); */
        width: 100vw
    }
</style>
