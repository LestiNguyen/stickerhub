import {
    CREATE_CARD
} from '../types'

export const createCard = (params) =>{
    return (dispatch) =>{
        return dispatch({
            type:CREATE_CARD,
            payload: {
                name: params.name,
                id:params.name
            }
        })
    }
}