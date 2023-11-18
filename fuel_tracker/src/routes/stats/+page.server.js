export async function load({locals}) {

    let res = await fetch('http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_cars.php', {
        method: 'POST', 
        body: JSON.stringify({id: locals.user.id})
    })
    let data = await res.json();

    for (let i = 0; i < data.data.length; i ++) {
        let fuel_res = await fetch("http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_fuel.php", {
            method: 'POST',
            body: JSON.stringify({
                id: data.data[i].id
            })
        });

        let fuel_data = await fuel_res.json();
        console.log("fuel data:", fuel_data)

        data.data[i].fuel_data = fuel_data.data;
    }
    
    return {
        cars: data.data
    }
}