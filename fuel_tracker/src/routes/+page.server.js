import { CarFuel } from '$classes/Cars_Fuel.js'
import { CreateAccount } from '$classes/Account.js'

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