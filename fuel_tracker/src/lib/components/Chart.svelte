<script>
    import * as Plot from "@observablehq/plot"

    export let config;

    let div;
    let y = config.y

    function myplot() {
        return Plot.plot({
            style: {
                backgroundColor: '#0f0e17' 
            },
            y: {
                grid: true
            },
            marks: [
                Plot.ruleY([0]),
                Plot.barY(config.data, {x: config.x, y: y, stroke: config.color})
            ]
        })
    }

    $: if (y) {
        div?.firstChild?.remove();
        div?.append(myplot());
        console.log("updated")
    }

</script>

<div bind:this={div}/>

<select on:click={(e) => {
    console.log(e.target.value);
    y = e.target.value
}}>
    {#each Object.keys(config.data[0]) as key}
        {#if key != 'date'}
        <option  value="{key}" >{key}</option>
        {/if}

    {/each}

</select>