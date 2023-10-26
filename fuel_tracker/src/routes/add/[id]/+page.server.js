

export async function load({params}) {
    return {
        car_id: params.id
    }
}

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        let body = {
            cost: data.get('cost'),
            price: data.get('price'),
            liters: data.get('liters'),
            kmTraveled: data.get('kmTravled'),
            car_id: data.get('car_id')
        }
        console.log(body);
        let url = "http://otternonesenses.co.za/Fuel_tracker/refuel-api/insert_fuel.php";
        let opt = {
            method: "POST",
            body: JSON.stringify(body)
        }

        let res = await (await fetch(url, opt)).text();
        console.log(res);

        return {
            res: res.success,
            body: body
        }
    }
}