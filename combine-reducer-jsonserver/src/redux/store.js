import {createStore, combineReducers} from "redux"
import {reducer} from './counter/reducer'
import {reducerTodo} from './todo/reducer'

const rootReducer=combineReducers({
    count:reducer,
    todos:reducerTodo
})



export const store = createStore(rootReducer); 