import { redirect } from "@sveltejs/kit";


export async function load({params}) {
    return {
        car_id: params.id
    }
}

export const actions = {
    default: async ({request, url}) => {
        const data = await request.formData();
        let body = {
            cost: data.get('cost'),
            price: data.get('price'),
            liters: data.get('liters'),
            kmTraveled: data.get('kmTravled'),
            car_id: data.get('car_id')
        }
        console.log(body);
        let opt = {
            method: "POST",
            body: JSON.stringify(body)
        }

        let res = await (await fetch("http://otternonesenses.co.za/Fuel_tracker/refuel-api/insert_fuel.php", opt)).json();
        console.log(res);

        if (res.success) {
            throw redirect(303, url.origin)
        }

        return {
            res: res.success,
            body: body
        }
    }
}