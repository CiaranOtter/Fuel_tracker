export async function load({ fetch, locals }) {
    return {
        user: locals.user
    }
}

export const actions = {
    default: async ({request, locals}) => {
        const form = await request.formData();
        let name = form.get('name');

        let res = await fetch("http://otternonesenses.co.za/Fuel_tracker/refuel-api/login.php", {
            method: "POST",
            body: JSON.stringify({
                name: name
            })
        })

        let data = await res.json();

        if (data.success) {
            return {
                success: data.success
            }
        }
    }
}