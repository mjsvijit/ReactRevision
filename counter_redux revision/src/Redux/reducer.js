import {

    ADD_COUNT, DEC_COUNT, MULTIPLY_COUNT,ADD_INPUT_COUNT,SUB_INPUT_COUNT,DIV_COUNT
} from './action';

const initialState ={
    count:0
}


const reducer = (store=initialState, action) =>{
    
    switch(action.type){
        case ADD_COUNT:
        return{
            ...store,
            count:store.count+action.payload
        }

        case DEC_COUNT:
            return{
                ...store,
                count:store.count-action.payload
            }

        case ADD_INPUT_COUNT:
            return{
                ...store,
                count:store.count + action.payload
            }    

        case MULTIPLY_COUNT:
            return{
                ...store,
                count:store.count*action.payload
            }  
         
        case SUB_INPUT_COUNT:
            return{
                ...store,
                count:store.count-action.payload
            } 
            
        case DIV_COUNT:
            return{
                ...store,
                count:store.count/action.payload
            }    
        default:
            return store;
    }
}

export {reducer};