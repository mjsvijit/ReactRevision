export const INC_COUNT = "INC_COUNT"
export const DEC_COUNT = "DEC_COUNT"
export const RESET_COUNT = "RESET_COUNT"


export const incCount = (payload) => ({
    type: INC_COUNT,
  
  
})

export const decCount = (payload) =>({
    type: DEC_COUNT,
  
})

export const resetCount= (payload) =>({
    type: RESET_COUNT,
    
})

