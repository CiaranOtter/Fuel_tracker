<script>
    import { append } from "svelte/internal";

    let amount = 0;
    let price = 0;
    let liters = 0;

    const saveFuel = async () => {

        console.log("running save: ", amount, liters, price);

        let data = new FormData();

        data.append('data', JSON.stringify({
                cost: amount,
                price: price,
                liters: liters
            }));
        
        await fetch(`http://otternonesenses.co.za/refuel-api/insert_fuel.php?cost=${amount}&price=${price}&liters=${liters}`)
        .then(res => res.text())
        .then(res => console.log(res))
    }
</script>

<div class="container">
    <div class="title">New refuel:</div>
    <div class="label">Rands:</div>
    <input name="amount" type="number"  bind:value={amount}/>
    <div class="label">Price: </div>
    <input type="number" bind:value={price} />
    <div class="label">Liters: </div>
    <input type="number" bind:value={liters} />
    <input type="submit" on:click={saveFuel} value="save" />
</div>

<style>

    .title {
        font-weight: 100;   
        font-size: 2rem;  
        text-align: center;
        padding: 10px;
    }

    input {
        margin: auto;
        display: block;
        width: 75%;
        margin-bottom: 10px;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid black;
        background-color: var(--primary);
    }

    .label {
        margin: auto;
        font-size: 12px;
        font-weight: 800;
        width: 75%
    }

    input[type=submit] {
        border: none;
        background-color: var(--quaternary);
        padding:5px 20px;
        font-size: 20px;
        width: 60%;
        color: var(--primary)
    }
    input[type=submit]:hover {
        background-color: var(--tertiary);
    }

</style>