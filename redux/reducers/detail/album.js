import {
    FETCH_DETAIL_ALBUM,
    FETCH_DETAIL_ALBUM_FAIL,
    FETCH_DETAIL_ALBUM_SUCCESS
  } from '../../../constants/ActionTypes';
  
  const initialState = {
    albums: {},
    id: null
  };
  
  const album = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
      case FETCH_DETAIL_ALBUM:
        return {
          ...state,
          id: payload.id
        }; 
      case FETCH_DETAIL_ALBUM_FAIL:
        return initialState;
      case FETCH_DETAIL_ALBUM_SUCCESS:
        return {
          ...state,
          albums: payload.data
        };  
      default:
        return state;
    }
  }
  
  export default album
  
  