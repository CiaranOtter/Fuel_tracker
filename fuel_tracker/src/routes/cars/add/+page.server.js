import { redirect } from "@sveltejs/kit";


export const actions = {
    default: async ({request, locals,  url}) => {
        const form = await request.formData();
        let name = form.get('name');

        let res = await fetch("http://otternonesenses.co.za/Fuel_tracker/refuel-api/insert_car.php", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                account_id: locals.user.id
            })
        })

        let data = await res.json();
        console.log(data)

        if (data.success) {
            throw redirect(303, url.origin);
        }
    }
}