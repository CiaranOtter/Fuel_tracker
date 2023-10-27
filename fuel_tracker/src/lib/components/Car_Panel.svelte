<script>
    import { CarFuel } from "$classes/Cars_Fuel";
    import { onMount } from "svelte";
    import { identity } from "svelte/internal";
    import FuelPanel from "./FuelPanel.svelte";
    import { goto } from '$app/navigation';

    export let cars;
    let promise;

    let active_car = CarFuel(cars[0])
    

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
</script>

<div class="container">
    <div class="tab-container">
        {#each cars as c}
        <div class="tab {(c.id== active_car.id) ? 'active' : ''}"
            on:click={() => select(c)}
        >{c.name}</div>
        {/each}
    </div>

    <div class="data-container">

        <div class="add-button" on:click={() => {
            goto(`add/${active_car.id}`)
        }}>Add new fuel</div>
        {#await promise}
            <p>loading...</p>
        {:then p}
        <FuelPanel fuel={active_car.fuel_items} refresh={refresh} />
        {/await}
    </div>
</div>



<style>

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
