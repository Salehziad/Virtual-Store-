let initialState = {
    categories: [
        {
            name: 'FOOD',
            active:false
        }, {
            name: 'ELECTRONICS',
            active:false
        }, {
            name: 'GAMES',
            active:false
        }, {
            name: 'WEAPONS',
            active:false
        }
    ]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default(state = initialState, action) => {

    const {type, payload} = action;
    switch (type) {
        case 'ACTIVE':
            // console.log('kkkkkk');
            let categories = state
                .categories
                .map((data) => {
                    if (data.name === payload) {
                        return {
                            name:data.name,
                            active:true,
                        }
                    }
                    return data;
                })
                // console.log('hhhh');
                return {categories: categories}
        case 'RESET':
            return initialState;
        default:
            return state;

    }
}
//actions
export const active = (name) => {
    // console.log(name);
    return {type: 'ACTIVE', payload: name}
}
export const reset = () => {
    return {type: 'RESET'}
}