import { createStore , applyMiddleware} from 'redux'
import reducers from './reducers/combine_Reducers'
import thunk from 'redux-thunk';
 const store = createStore(
    reducers,
    {}, // default state empty object
    applyMiddleware(thunk)
)

export default store;