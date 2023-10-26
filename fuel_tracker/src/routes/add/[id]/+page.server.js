

export async function load({params}) {
    return {
        car_id: params.id
    }
}

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const car_id = data.get('car_id');
        const price = data.get('price');
        const cost = data.get('cost');
        const liters = data.get('liters');
        
    }
}