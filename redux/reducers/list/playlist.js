import {
    FETCH_LIST_PLSYLIST,
    FETCH_LIST_PLSYLIST_FAIL,
    FETCH_LIST_PLSYLIST_SUCCESS
  } from '../../../constants/ActionTypes';
  
  const initialState = {
    playlists: [],
    page: 0,
    more: true
  };
  
  const playlist = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
      case FETCH_LIST_PLSYLIST:
        return {
          ...state,
          page: payload.page
        }; 
      case FETCH_LIST_PLSYLIST_FAIL:
        return initialState;
      case FETCH_LIST_PLSYLIST_SUCCESS:
        return {
          ...state,
          playlists: payload.data,
          more: payload.more
        };  
      default:
        return state;
    }
  }
  
  export default playlist
  
  