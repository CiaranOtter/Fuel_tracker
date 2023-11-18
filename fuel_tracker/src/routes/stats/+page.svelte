<script>
    import * as Plot from "@observablehq/plot"
    import Chart from "$components/Chart.svelte";

    export let data;

    console.log(data.cars[0].fuel_data);

    let test_data = data.cars[0].fuel_data.map(item => {
        // console.
        return {
            cost: +item.cost,
            liters: +item.liters,
            price: +item.price,
            date: new Date(item.date)
        }
    })

    console.log(test_data)

    let config = {
        data: test_data,
        x:'date',
        y: 'cost',
        color: '#ff8906'
    }

    // function myplot(node) {
    //     node.appendChild(
            
    //         Plot.plot({
    //             style: {
    //                 backgroundColor: '#0f0e17'
    //             },
    //             y: {
    //                 grid: true
    //             },
    //             marks: [
    //                 Plot.ruleY([0]),
    //                 Plot.lineY(test_data, {x:"date", y:'cost', stroke: '#ff8906'}),
    //             ]
    //         })

    //     )
    // }
</script>

<!-- <div class="chart" use:myplot ></div> -->
<Chart config={config} />

<style>
    .chart {
        background-color: var(--black);
    }
</style>