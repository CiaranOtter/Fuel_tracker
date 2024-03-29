import { CarFuel } from "$classes/Cars_Fuel.js"

const account_prot = {
    init: async function(id) {
        let url = "http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_account.php";

        let opt = {
            method: "POST",
            body: JSON.stringify({
                id: id
            })
        };


        let res = await fetch(url, opt);
        let data = await res.json();

        console.log(data)

        if (data.success) {
            this.name = data.data[0].name;
            this.id = data.data[0].id;
            this.cars = [];
            return this;
        }
        this.error = "No aaccount with id "+id+ " can be found";

        return false;
    },
    fetch_cars: async function() {
        let url = "http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_cars.php";
        let opt = {
            method: 'POST',
            body: JSON.stringify({
                id: this.id
            })
        }

        let res = await fetch(url, opt);
        let data = await res.json();

        console.log("car data:", data)

        if (data.success) {
            data.data.forEach(item => {
                console.log("car items:", item);
                this.cars.push(CarFuel(item));
            })
        }
    }

}

export async function CreateAccount(id) {
    return await Object.create(account_prot).init(id);    
}