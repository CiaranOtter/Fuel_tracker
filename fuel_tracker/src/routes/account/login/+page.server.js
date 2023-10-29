import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request, cookies, url }) => {
        const form = await request.formData();

        let name = form.get('name').toLowerCase();
        let password = form.get('password');

        let opt = {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                pass: password
            })
        }

        let res = await fetch("http://otternonesenses.co.za/Fuel_tracker/refuel-api/login.php", opt)
        let data = await res.json();
        console.log(data);

        if (data.success) {
            cookies.set('account_details', JSON.stringify({user: data.data}), {path: '/'})
            throw redirect(303, url.origin);
        }
    }
}