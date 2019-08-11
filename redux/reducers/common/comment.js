import {
    FETCH_COMMON_COMMENT,
    FETCH_COMMON_COMMENT_FAIL,
    FETCH_COMMON_COMMENT_SUCCESS
  } from '../../../constants/ActionTypes';
  
  const initialState = {
    comments: {},
    id: null
  };
  
  const comment = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
      case FETCH_COMMON_COMMENT:
        return {
          ...state,
          id: payload.id
        }; 
      case FETCH_COMMON_COMMENT_FAIL:
        return initialState;
      case FETCH_COMMON_COMMENT_SUCCESS:
        return {
          ...state,
          comments: payload.data
        };  
      default:
        return state;
    }
  }
  
  export default comment
  
  