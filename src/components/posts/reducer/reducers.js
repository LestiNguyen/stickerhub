import {
    CREATE_POST
} from '../types'

const INITIAL_STATE = {
        namePost:'',
        ID:''
}
const Reducer = (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case CREATE_POST:
            return{
                ...state,
                namePost:action.payload.name,
                ID:action.payload.ID
            }    
        default:
            return state
    }
    return state
}
export default Reducer