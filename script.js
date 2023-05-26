const cost_in = document.getElementById('cost');
const petrol_in = document.getElementById('petrol');
const price_in = document.getElementById('price');
const save_button = document.getElementById('save');

const save_fuel = () => {
    let amount = petrol_in.value;
    let cost = cost_in.value;
    let price = price_in.value;

    let url = `http://otternonesenses.co.za/Fuel_tracker/refuel-api/insert_fuel.php?cost=${cost}&price=${price}&liters=${amount};`

    fetch(url)
    .then(res => {
        console.log(res)
        return res.text()
    })
    .then(data => {
        if (data == "1") {
            console.log(data, "save was successful");
        } else {
            console.log(data, "save was unsuccessful");
        }
    })
}

save_button.addEventListener('click', save_fuel);