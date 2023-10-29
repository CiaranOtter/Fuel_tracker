import { CarFuel } from '$classes/Cars_Fuel.js'
import { CreateAccount } from '$classes/Account.js'
import { redirect } from '@sveltejs/kit';

export async function load({}) {
    let id = 1;

    let account = await CreateAccount(id);
    
    if (!account) {
        return {
            error: 'No account with the id ' + id + ' can be found'
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