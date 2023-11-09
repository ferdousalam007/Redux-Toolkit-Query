import { DYNAMICINCREMENT, DYNAMICDECREMENT } from "./actionsTypes"

export const increment =(value)=>{
    return{
        type:DYNAMICINCREMENT,
        payload:value
    }
}
export const decrement =(value)=>{
    return{
        type:DYNAMICDECREMENT,
        payload:value
    }
}