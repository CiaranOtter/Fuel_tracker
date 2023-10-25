const fuel_prot = {
    init: function(obj) {
        if (obj.hasOwnProperty('id')) {
            this.id = obj.id;
        }   
    
        if (obj.hasOwnProperty('cost')) {
            this.cost = obj.cost;
        }
    
        if (obj.hasOwnProperty('liters')) {
            this.liters = obj.liters;
        }
    
        if (obj.hasOwnProperty('price')) {
            this.price = obj.price
        }
    
        if (obj.hasOwnProperty('date')) {
            this.date = obj.date
        }
    
        if (obj.hasOwnProperty('car_id')) {
            this.car_id = obj.car_id
        }
    
        if (obj.hasOwnProperty('kmTraveled')) {
            this.kmTraveled = obj.kmTraveled
        }

        return this;
    },
    delete_fuel: function() {
        console.log("I have been requested to delete", this.id);
    },
    populate_block: function(item) {
        this.block = item
        this.block.id.replace('prototype', this.id);
        this.block.classList.remove('prototype');
        console.log(this.block.children)

        for (let i = 0; i < this.block.children.length; i++) {
            let child = this.block.children[i];

            let el = child.id.replace('fuel', '').replaceAll('_', '');
            console.log(el, this.hasOwnProperty(el));
            if (this.hasOwnProperty(el)) {
                child.innerHTML = this[el];
            }

            if (child.id == 'fuel_delete_button') {
                child.addEventListener('click', () => this.delete_fuel());
            }
        }

        return this.block;
    }
}

export function Fuel(obj) {
    console.log(obj)
    let f = Object.create(fuel_prot).init(obj);
    return f;
}