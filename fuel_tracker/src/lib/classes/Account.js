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
        let data = res.json();

        if (data.success) {
            this.name = data.data.name;
            this.id = data.data.id;
            this.cars = [];
            return this;
        }
        this.error = "No aaccount with id "+id+ " can be found";

        return false;
    },
    fetch_cars: async function() {
        // let url = "http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_fuel.php";
        // let opt = {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         id: this.id
        //     })
        // }

        // let res = await fetch(url, opt);
        // let data = await res.json()

        // if (data.success) {
        //     data.data.forEach(item => {
        //         this.fetch_cars.push(CarFuel(item));
        //     })
        // }
    }

}

export function CreateAccount(id) {
    return Object.create(account_prot).init(id);
}