
import {ADD_TODO,JSON_DATA } from "./action"

const initState={
    todos:[{
        id: 1,
        title:""
    }]
}


export const reducerTodo = (store=initState, action) => {
   switch(action.type){
    case JSON_DATA:
        return {
               todos:action.payload
           }

    case ADD_TODO:
        return {
          
         ...store,
         todos:[...store.todos,action.payload]

        }
       
        
  default:
      return store
}
}
