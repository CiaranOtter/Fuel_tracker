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
    });
}

const remove_item = (obj) => {
    console.log("delete this item", obj) 
    
    let url = "http://otternonesenses.co.za/Fuel_tracker/refuel-api/delete_fuel.php?id=" + obj['id'];
    fetch(url)
    .then(res => res.text())
    .then(data => {
        if (data == "1") {
            console.log("delete was succesful");
        } else {
            console.log("delete was unsuccessful");
        }
    });
}

const show_menu = (e, obj) => {
    console.log("show menu", obj, e);

    let menu = document.createElement('div');
    menu.classList.add('menu');
    menu.setAttribute('position', 'absolute')
    menu.setAttribute('top', e.clientY);
    menu.setAttribute('left', e.clientX);
    document.body.appendChild(menu);

    let delete_item = document.createElement('div');
    delete_item.classList.add('menu-item');
    delete_item.innerHTML = "Delete";
    delete_item.addEventListener('click', () => {
        remove_item(obj)
    });

    menu.appendChild(delete_item);
}


const format_fuel_block = (obj) => {
    console.log(obj)
    let cont = document.createElement('div')
    cont.classList.add('fuel_block')

    let inner_cont = document.createElement('div')
    inner_cont.classList.add('flex_container')
    inner_cont.classList.add('left');

    let edit_cont = document.createElement('div')
    edit_cont.classList.add('flex_container')
    edit_cont.classList.add('right');

    delete_icon = document.createElement('i');
    delete_icon.classList.add('material-icons');
    delete_icon.classList.add('delete-icons');
    delete_icon.classList.add('icon');
    delete_icon.innerHTML = "more_vert";
    delete_icon.addEventListener('click', (e) => show_menu(e, obj));

    // cont.appendChild(edit_cont);
    edit_cont.appendChild(delete_icon);


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

        inner_cont.appendChild(row);

    }

    cont.appendChild(edit_cont);
    cont.appendChild(inner_cont);
    

    fuel_block.appendChild(cont);
}

save_button.addEventListener('click', save_fuel);