const add_car = document.getElementById('add-car-button');
const add_fuel_drop = document.getElementById('add-fuel-drop');
const add_fuel_button = document.getElementById('add-fuel');

const price_input = document.getElementById('price');
const cost_input = document.getElementById('cost');
const liters_input = document.getElementById('liters');

const Fuel = (cost, price, liters, car) => {
    this.cost = cost;
    this.price = price; 
    this.liters = liters;
    this.car = car;
}

add_car.addEventListener('click', () => {
    const car = new Car();
    car.save_car();
    let opt = document.createElement('option');
    opt.value = car;
    opt.innerHTML = car.name;
    add_fuel_drop.appendChild(opt);

});

add_fuel_button.addEventListener('click', () => {
    let reFuel = Fuel(cost_input.value, price_input.value, liters_input.value. add_fuel_drop.value);
    console.log(reFuel);
});


class Car {
    constructor() {
        this.name = "new car";
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
