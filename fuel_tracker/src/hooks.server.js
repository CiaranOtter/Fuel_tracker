import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
    let cookie = event.cookies.get('account_details');
    console.log(event.url.pathname);

    if (!cookie && event.url.pathname != '/account/login') {
        // event.locals.user = {
        //     loggedIn: false
        // }
        throw redirect(303, "/account/login");
    }

    if (!cookie) {
        return await resolve(event);
    }

    cookie = JSON.parse(cookie);
    let name = cookie.user.name;
    let password = cookie.user.password;

    console.log("thing: ", name, password)

    let res = await fetch("http://otternonesenses.co.za/Fuel_tracker/refuel-api/login.php", {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            pass: password
        })
    })
    let data = await res.json();
    console.log(data)
    
    if (!data.success && event.url.pathname != '/account/login') {
        throw redirect(303, '/account/login');
    }

    event.locals.user = {
        id: data.data.id
    }

    return await resolve(event);
    // let user = cookies.get('account_details');
    // console.log(user);
}