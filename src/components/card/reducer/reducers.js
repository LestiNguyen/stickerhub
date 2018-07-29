import {
    CREATE_CARD
} from '../types'

const INITIAL_STATE = {
    name:'',
    id:''
}
const Reducer = (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case CREATE_CARD:
            return{
                ...state,
                name:action.payload.name,
                id:action.payload.id
            }    
        default:
            return state
    }
    return state
}
export default Reducer