

export async function load({params}) {
    let url = "http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_car.php";
    let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            id: params.id
        })
    })

    let data = await res.text();

    return {
        car: data
    }
}