import {
    ADD_NEW_ITEM, DELETE_TODO
}from './action.js'

const initialState = {
    todos:['Testing Todos']
};

export const reducer =(store = initialState, action) => {
    switch(action.type){
        case ADD_NEW_ITEM:
            return{
              ...store,
              todos: [...store.todos, action.payload]
            };

         case DELETE_TODO:
             return{
                ...store,
               s:store.todos.splice(action.payload,1),
               todos:store.todos
            //    todos: store.todos.filter(index => {
            //         return index !== action.payload
            //     })
               
             }   
            default:
              return store;
    }
}