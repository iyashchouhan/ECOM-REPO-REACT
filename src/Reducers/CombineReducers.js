import {combineReducers} from 'redux'

import CountReducer from './CountReducers'
import LoginReducer from './LoginReducer'
import CartReducer from './Cartreducer'


export default combineReducers({
CountReducer,
LoginReducer,
CartReducer
    

})