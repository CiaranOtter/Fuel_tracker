class Fuel {
    constructor() {
        this.price;
        this.liters;
        this.cost;
        this.date = new Date();

        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    setCost(cost) {
        this.cost = cost;
        return this;
    }

    setLiters(liters) {
        this.liters = liters
        return this;
    }

    setDate(date) {
        this.date = date;
        return this;
    }

    setData(json_array) {
        if (json_array.hasOwnProperty('price')) {
            this.setPrice(json_array.price);
        }
        if (json_array.hasOwnProperty('cost')) {
            this.setCost(json_array.cost);
        }
        if (json_array.hasOwnProperty('liters')) {
            this.setLiters(json_array.liters);
        }
        if (json_array.hasOwnProperty('date')) {
            this.setDate(json_array.date);
        }
        return this;
    }

    async save_fuel() {
        let res = await fetch("http://otternonesenses.co.za/Fuel_tracker/refuel-api/insert_fuel.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                price: this.price,
                cost: this.cost,
                liters: this.liters,
                date: this.date
            })

        });

        let data = await res.json();
        if (data.success) {
            this.setId(data.data.id);
        }

        return this;
    }

}