import {
    FETCH_DETAIL_PLSYLIST,
    FETCH_DETAIL_PLSYLIST_FAIL,
    FETCH_DETAIL_PLSYLIST_SUCCESS
  } from '../../../constants/ActionTypes';
  
  const initialState = {
    playlists: {},
    id: null
  };
  
  const playlist = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
      case FETCH_DETAIL_PLSYLIST:
        return {
          ...state,
          id: payload.id
        }; 
      case FETCH_DETAIL_PLSYLIST_FAIL:
        return initialState;
      case FETCH_DETAIL_PLSYLIST_SUCCESS:
        return {
          ...state,
          playlists: payload.data
        };  
      default:
        return state;
    }
  }
  
  export default playlist
  
  