import {
    UPDATE_GLOBAL_REDUCER
} from './types'
import { setCookie, getCookie } from '../tools/cookies'

export const updateGlobalReducer = (name, value) => async dispatch => {

    dispatch({
        type: UPDATE_GLOBAL_REDUCER,
        payload: { name, value }
    })
}


export const handleFavorites = (id, add) => async dispatch => {
    let cookie = getCookie('favorites1')
        let arr = []
        if(cookie){
            arr = JSON.parse(cookie)
        }
        if(add){
            arr = [...arr, id]
        }else{
            arr = arr.filter(n => n.id !== id)
        }

        setCookie('favorites1', JSON.stringify(arr))
        let name = 'favorites'
        let value = arr

    dispatch({
        type: UPDATE_GLOBAL_REDUCER,
        payload: { name, value }
    })
}