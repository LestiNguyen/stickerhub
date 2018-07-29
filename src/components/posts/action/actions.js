import {
    CREATE_POST
} from '../types'
export const createPost = (params) =>{
    return (dispatch) =>{
        return dispatch({
            type:CREATE_POST,
            payload: {
                name: params.name,
                id:params.name
            }
        })
    }
}