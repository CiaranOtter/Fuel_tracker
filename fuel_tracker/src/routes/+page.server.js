import { CarFuel } from '$classes/Cars_Fuel.js'
import { CreateAccount } from '$classes/Account.js'
import { redirect } from '@sveltejs/kit';

export async function load({locals}) {
    console.log("locals is:", locals.user.id)
    let account = await CreateAccount(locals.user.id);
    
    if (!account) {
        return {
            error: 'No account with the id ' + locals.user.id + ' can be found'
        }
    }
    await account.fetch_cars();
    console.log(account)
    return {
        account: JSON.stringify(account)
    }
}

export const actions = {
    logout: async ({cookies}) => {
        console.log("testing logging out");
        cookies.delete('user_details');
        throw redirect(303, '/account/login');
    }
}