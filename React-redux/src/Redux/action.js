export const ADD_NEW_ITEM="ADD_NEW_ITEM"
export const DELETE_TODO="DETETE_TODO"


export const addItem =(newItem)=>({
    type:ADD_NEW_ITEM,
    payload:newItem
})
export const deleteTodo=(index)=>(
    {
    type:DELETE_TODO,
    payload:index
}
)