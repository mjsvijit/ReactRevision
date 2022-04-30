
import { INC_COUNT,DEC_COUNT, RESET_COUNT } from "./action"



const initState={
    count:0
}


export const reducer = (store=initState, action) => {
   switch(action.type){
   
       
        case INC_COUNT: 
        return {
            ...store,
            count:store.count+1
        }

        case DEC_COUNT:
            return {
                ...store,
                count:store.count-1
            }

            case RESET_COUNT:
                return {
                    ...store,
                    count:0
                }
  default:
      return store
}
}
