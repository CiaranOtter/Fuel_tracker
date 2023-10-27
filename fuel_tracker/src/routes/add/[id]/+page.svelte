<script>
    import { goto } from '$app/navigation';
    import { CarFuel } from '$classes/Cars_Fuel.js';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    export let data;
    let car_id = data.car_id;

    console.log(car_id);

    console.log($page);

    export let form;

    onMount(() => {
        if (form?.res) {
            console.log("it was a success:", $page.url.origin+'/')
            let a = document.createElement('a');
            a.href = $page.url.origin;
            a.click();
        } else {
            console.log("Not quite")
        }
    })
    
</script>

<form method="post">
    <div class="header">Add a new fueling</div>
    <input id="car_id_input" type="hidden" value="{car_id}" name="car_id"/>
    <label for="price_input">Current price of fuel:</label><br/>
    <input class="data_input"  id="price_input" type="number" name="price" value="0" step=0.01/><br/>
    <label for="cost_input">Amount spent on fuel:</label><br/>
    <input  class="data_input" id="cost_input" type="number" name="cost" value="0" step=0.01/><br/>
    <label for="liters_input">Liters purchased:</label><br/>
    <input  class="data_input" id="liters_input" type="number" name="liters" value="0" step=0.01 /><br/>
    <label for="kmTraveled_input">Kms travled on car:</label><br/>
    <input  class="data_input" id="kmTraveled_input" type="number" name="kmTravled" value="0" step=0.01 /><br/>
    <div class="flex-containe"><input class="submit_button" type="submit" value="Add Fuel" /></div>
</form>

<style>
    form {
        border: 1px solid var(--lightgray);
        width: fit-content;
        padding: 30px 30px;
        border-radius: 5px;
        margin: auto;
        top: 50%;
        left: 50%;
        background-color: var(--white);
        position: absolute;
        transform: translate(-50%, -50%);
    }

    .header {
        color: var(--black);
        font-weight: 500;
        font-size: 25px;
        margin-bottom: 10px;
    }

    .data_input {
        padding: 5px 10px;
        font-size: 15px;
        border-radius: 5px;
        margin-bottom: 10px;;
    }

    .submit_button {
        background: var(--pink);
        border: 1px soild var(--pink);
        box-shadow: none;
        color: var(--white);
        margin: auto;
        display: block;
        padding: 10px 20px;
        margin-top: 10px;;
        border-radius: 10px;
        font-weight: 700;
        font-size: 20px;;
    }

    label {
        margin-left: 5px;
    }
    
</style>