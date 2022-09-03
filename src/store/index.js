import { combineReducers, createStore } from 'redux';
import categories from './categories';
import products from './products';
import { composeWithDevTools } from 'redux-devtools-extension';
// let reducers = combineReducers({
//     counter: counter,
//     // campaigns: campaigns
// })
let reducers = combineReducers({ categories,products })

const store = () => {
    // return createStore(reducers);

    // return createStore(counter);
    return createStore(reducers, composeWithDevTools());

}

export default store();