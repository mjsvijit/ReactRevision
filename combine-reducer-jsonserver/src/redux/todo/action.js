export const ADD_TODO="ADD_TODOS";
export const JSON_DATA="JSON_DATA"

export const addTodo=(payload)=>{
    return {
        type:ADD_TODO,
        payload
    }
}

export const jsonData=(data)=>({
     type:JSON_DATA,
     payload:data
})