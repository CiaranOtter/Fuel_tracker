<script>
    import { CarFuel } from '$classes/Cars_Fuel.js';

    export let data;
    let car_id = data.car_id;

    console.log(car_id)

    export let form;
</script>

<form method="post">
    <input id="car_id_input" type="hidden" value="{car_id}" name="car_id"/><br/>
    <label for="price_input">Current price of fuel:</label><br/>
    <input id="price_input" type="number" name="price" value="0" step=0.01/><br/>
    <label for="cost_input">Amount spent on fuel:</label><br/>
    <input id="cost_input" type="number" name="cost" value="0" step=0.01/><br/>
    <label for="liters_input">Liters purchased:</label><br/>
    <input id="liters_input" type="number" name="liters" value="0" step=0.01 /><br/>
    <label for="kmTraveled_input">Kms travled on car:</label><br/>
    <input id="kmTraveled_input" type="number" name="kmTravled" value="0" step=0.01 /><br/>
    <input type="submit" value="Add Fuel" />
</form>