const cost_in = document.getElementById('cost');
const petrol_in = document.getElementById('petrol');
const price_in = document.getElementById('price');
const save_button = document.getElementById('save');
const fuel_block = document.getElementById('fuel-list');

const save_fuel = () => {
    let amount = petrol_in.value;
    let cost = cost_in.value;
    let price = price_in.value;

    let url = `http://otternonesenses.co.za/Fuel_tracker/refuel-api/insert_fuel.php?cost=${cost}&price=${price}&liters=${amount}`

    console.log(url);

    fetch(url)
    .then(res => res.text())
    .then(data => {
        if (data == "1") {
            console.log(data, "save was successful");
        } else {
            console.log(data, "save was unsuccessful");
        }
    })
}

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

const format_fuel_block = (obj) => {
    console.log(obj)
    let cont = document.createElement('div')
    cont.classList.add('fuel_block')


    let title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = obj['date'];
    cont.appendChild(title);

    

    for (let key in obj) {

        if (key == 'date') {
            continue
        }
        let row = document.createElement('div');
        row.classList.add('row');

        let heading = document.createElement('div');
        heading.classList.add('heading');
        heading.classList.add('data-field');
        heading.innerHTML = key + ":";
        row.appendChild(heading);

        let value = document.createElement('div');
        value.classList.add('value');
        value.classList.add('data-field');
        value.innerHTML = obj[key];
        row.appendChild(value);

        cont.appendChild(row);

    }

    fuel_block.appendChild(cont);
}

save_button.addEventListener('click', save_fuel);