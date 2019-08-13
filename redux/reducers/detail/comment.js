import {
    FETCH_DETAIL_PLSYLIST_COMMENT,
    FETCH_DETAIL_PLSYLIST_COMMENT_FAIL,
    FETCH_DETAIL_PLSYLIST_COMMENT_SUCCESS
  } from '../../../constants/ActionTypes';
  
  const initialState = {
    comments: {},
    id: null,
    page: 0,
    more: true
  };
  
  const commment = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
      case FETCH_DETAIL_PLSYLIST_COMMENT:
        return {
          ...state,
          id: payload.id
        }; 
      case FETCH_DETAIL_PLSYLIST_COMMENT_FAIL:
        return initialState;
      case FETCH_DETAIL_PLSYLIST_COMMENT_SUCCESS:
        return {
          ...state,
          comments: payload.data,
          more: payload.more
        };  
      default:
        return state;
    }
  }
  
  export default commment
  
  