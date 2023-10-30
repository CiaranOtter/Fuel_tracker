export async function load({ locals}) {
    let res = await fetch("http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_cars.php", {
        method: 'POST',
        body: JSON.stringify({
            id: locals.user.id
        })
    })

    let data = await res.json();

    return {
        cars: data.data
    }
}