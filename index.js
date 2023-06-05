//! BEGINNING OF UI HANDLING

//* UI for creating a car profile
const create_button = document.getElementById('create-car-button');
create_button.addEventListener('click', () => {
    let car = new Car_profile('honda'); 
});

const make_array = (e) => {
    if (Array.isArray(e)) {
        e = [...e];    
    } else {
        e = [e];
    }
    return e;
    
}

const add_class_names = (element, arr) => {
    arr.forEach(cn => {
        element.classList.add(cn);
    });
}

const block  = (class_name) => {
    let item = document.createElement('div');
    add_class_names(item, make_array(class_name));

    // if (title != undefined) {
        
    // }

    return item;
}


document.body.appendChild(block('test'));



//! BEGINNING OBJECTS BEHIND UI

//? CAR PROFILE 

class Car_profile {

    constructor(name) {
        this.name = name;
        this  .current_price = 20.00;
        this.fuel_data = [
            // e.g of json object
            //{            
            //  date: 
            //  liters:
            //  cost:
            //  price: 
            //},
        ];
    }

    set_petrol_price(price) {
        this.price = price;
        return this;
    }

    // add_fuel(l, c, d) {
    //     let d;
    //     if (d != undefined) {
    //         d = date;    
    //     } else {
    //         d = new Date();
    //     }
    //     let obj = {
    //         date: d,
    //         liters: l,
    //         cost: c,
    //         price: this.price
    //     }

    //     this.fuel_data.push(obj);
    // }
}