import { redirect } from "@sveltejs/kit";

export async function load({params}) {
    let res = await fetch("http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_fuel_id.php", {
        method: 'POST',
        body: JSON.stringify({
            id: params.id
        })
    })

    let data = await res.json();

    if (data.success) {
        return {
            fuel: data.data
        }
    }
}

export const actions = {
    default: async({ request, url }) => {
        const form = await request.formData();

        let body = {
            price: form.get('price'),
            cost: form.get('cost'),
            liters: form.get('liters'),
            kmTraveled: form.get("kmTraveled"),
            date: form.get('date'),
            id: form.get('id')
        }

        console.log("body is: ", body);

        let res = await fetch("http://otternonesenses.co.za/Fuel_tracker/refuel-api/fetch_fuel_id.php", {
            method: "POST",
            body: JSON.stringify(body)
        });

        let data = await res.json();

        if (data.success) {
            throw redirect(303, url.origin);
        }
    }
}