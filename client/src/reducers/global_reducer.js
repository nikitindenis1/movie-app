import {UPDATE_GLOBAL_REDUCER} from '../actions/types'
  
  const initialState = {
  

  
  
  
  }
  
  export default function (state = initialState, action) {
  
    switch (action.type) {
      case UPDATE_GLOBAL_REDUCER:
        const {name, value} = action.payload
        return {
          ...state,
          [name]:value
        }
  
      default:
        return state
    }
  }