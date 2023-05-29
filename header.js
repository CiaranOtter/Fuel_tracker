const fetch_fuel = () => {
    let url = `http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_fuel.php`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for (let obj of data) {
            format_fuel_block(obj);
        }
    })
}