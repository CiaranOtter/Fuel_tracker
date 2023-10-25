import { Fuel } from '$classes/fuel.js'

const car_Fuel_prot = {
    init: function(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.fuel_items = [];
        return this;
    },
    add_fuel: function(fuel) {
        this.fuel_items.push(fuel)
    },
    fetch_fuel: async function() {
        let url = "http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_fuel.php";
        let res = await fetch(url);
        let data = await res.json();

        console.log("Fuel items:", data);

        if (data.success) {
            data.data.forEach(f => {
                let temp_fuel = Fuel(f);
                this.add_fuel(temp_fuel);
            });

            console.log(this.fuel_items);
        }
    }
}

export function CarFuel(obj) {
    return Object.create(car_Fuel_prot).init(obj);
    
}