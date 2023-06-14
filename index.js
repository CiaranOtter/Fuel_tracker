const add_car = document.getElementById('add-car-button');
const add_fuel_drop = document.getElementById('add-fuel-drop');
const add_fuel_button = document.getElementById('add-fuel');

const price_input = document.getElementById('price');
const cost_input = document.getElementById('cost');
const liters_input = document.getElementById('liters');

const car_name_in = document.getElementById('car_name_in');

const create_car_blocks = (car) => {
    let opt = document.createElement('option');
    opt.value = car;
    opt.innerHTML = car.name;
    add_fuel_drop.appendChild(opt);

    let block = document.createElement('div');
    block.classList.add('car-block');
    block.innerHTML = car.name;
    document.body.appendChild(block);
}

const load_cars = (cars) => {
    cars.forEach(car => {
        create_car_blocks(car)
    });
}

const get_cars = async (  ) => {
    fetch('http://otternonesenses.co.za/Fuel_tracker/refuel-api/get_cars.php')
    .then(res => res.json())
    .then(data => {
        if (data.success && data.data.length > 0) {
            console.log(data.data)
            load_cars(data.data);
        }
    })
}

get_cars();


const Fuel = (cost, price, liters, car) => {
    this.cost = cost;
    this.price = price; 
    this.liters = liters;
    this.car = car;
}

add_car.addEventListener('click', () => {
    const car = new Car(car_name_in.value);
    car.save_car();
    create_car_blocks(car);

});

add_fuel_button.addEventListener('click', () => {
    let reFuel = Fuel(cost_input.value, price_input.value, liters_input.value. add_fuel_drop.value);
    console.log(reFuel);
});






class Car {
    constructor(name) {
        this.name = "new car";
        if (name != undefined) {
            this.name = name;
        }

        this.fuel = [];

        return this;
    }

    add_fuel(fuel) {
        this.fuel.push(fuel);
    }

    async save_car() {

        fetch('http://otternonesenses.co.za/Fuel_tracker/refuel-api/add_car.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: this.name})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        }) 
    }

}
