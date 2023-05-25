<script>
    import { onMount } from 'svelte'

    ;

    const refresh = () => {
        return fetch("http://otternonesenses.co.za/refuel-api/fetch_fuel.php")
        .then(res => res.json())
        .then(data => {
            data.forEach(d => {
                d.date = new Date(d.date);
            });

            return data;
        })
    }
    
    let promise = refresh()



</script>

<div class="blocks-container">

    {#await promise}
        <p>loading...</p>
    {:then data}
        {#each data as d}
            <div class="container">
                <div class="title">{d.date.getDay() + " " + d.date.toLocaleString('default', {month: 'long'}) + " " + d.date.getFullYear()}</div>
                <div class="bold">AMOUNT:</div><div class="text"> R{(+d.cost).toFixed(2)}</div>
                <div class="bold">LITERS:</div><div class="text"> {(+d.liters).toFixed(2)} L</div>
                <div class="bold">PRICE:</div><div class="text"> R{(+d.price).toFixed()}</div>
            </div>
        {/each}
    {:catch error}
        <p>error: {error}</p>
    {/await}
</div>

<style>
    .block-container {
        border: 1px solid red;
        margin: 10px auto;
        max-width: 600px;
        width: 60%;
        text-align: center;
    }

    .title {
        text-align: right;
        font-weight: 600;
        font-size: 0.8rem;
        grid-column: 1 / 3;
        border-bottom: 1px dashed black;
    }

    .bold {
        font-weight: 400;
        text-align: right;
    }
    .text {
        text-align: center;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
</style>