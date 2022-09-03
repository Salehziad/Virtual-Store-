import data from '../store/data';

let initialState = {
    products:data
}
// eslint-disable-next-line import/no-anonymous-default-export
export default(state = initialState, action) => {

    const {type, payload} = action;
    switch (type) {
        case 'GET BY CATEGORY NAME':
            let products = state
                .products
                .filter((data) => {
                    if (data.categoryAssociation === payload) {
                        return data;
                    }
                })
                // console.log(products);
                return {products: products}
        case 'RESET':
            // console.log('reset');
            return initialState;
        default:
            return state;

    }
}
//actions
export const getByCategory = (name) => {
    return {type: 'GET BY CATEGORY NAME', payload: name}
}
export const resetProducts = () => {
    return {type: 'RESET'}
}