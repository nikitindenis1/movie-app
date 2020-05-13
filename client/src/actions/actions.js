import {
    UPDATE_GLOBAL_REDUCER
} from './types'

export const updateGlobalReducer = (name, value) => async dispatch => {

    dispatch({
        type: UPDATE_GLOBAL_REDUCER,
        payload: { name, value }
    })
}