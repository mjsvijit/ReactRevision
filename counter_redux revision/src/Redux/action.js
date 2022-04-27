const ADD_COUNT ="ADD_COUNT";
const DEC_COUNT ="DEC_COUNT";
const MULTIPLY_COUNT="MULTIPLY_COUNT"
const ADD_INPUT_COUNT="ADD_INPUT_COUNT"
const SUB_INPUT_COUNT="SUB_INPUT_COUNT"
const DIV_COUNT="DIV_COUNT"

const addInputCount=(data)=>({
    type:ADD_INPUT_COUNT,
    payload:data
})

const addCount=(data)=>({
    type:ADD_COUNT,
    payload:data
})

const decCount=(data)=>({
    type:DEC_COUNT,
    payload:data
})


const multiplyCount=(data)=>({
    type:MULTIPLY_COUNT,
    payload:data
})

const subInputCount = (data)=>({
    type:SUB_INPUT_COUNT,
    payload:data
})

const divCount =(data)=>({
     type:DIV_COUNT,
     payload:data
})

export {ADD_COUNT,addCount,DEC_COUNT,decCount,ADD_INPUT_COUNT,
    addInputCount,MULTIPLY_COUNT,multiplyCount,SUB_INPUT_COUNT,subInputCount,divCount,DIV_COUNT}