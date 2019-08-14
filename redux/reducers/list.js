import { combineReducers } from 'redux';

import {
    FETCH_LIST_PLSYLIST,
    FETCH_LIST_PLSYLIST_FAIL,
    FETCH_LIST_PLSYLIST_SUCCESS,

    FETCH_LIST_ALBUM,
    FETCH_LIST_ALBUM_FAIL,
    FETCH_LIST_ALBUM_SUCCESS,

    FETCH_LIST_SINGER,
    FETCH_LIST_SINGER_FAIL,
    FETCH_LIST_SINGER_SUCCESS
} from '../../constants/ActionTypes';
  
const initialState = {
    playlists: [],
    albums: [],
    singers: [],
    page: 0,
    more: true,
    singerId: null
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

const album = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
      case FETCH_LIST_ALBUM:
        return {
          ...state,
          page: payload.page
        }; 
      case FETCH_LIST_ALBUM_FAIL:
        return initialState;
      case FETCH_LIST_ALBUM_SUCCESS:
        return {
          ...state,
          albums: payload.data,
          more: payload.more
        };  
      default:
        return state;
    }
}

const singer = (state = initialState, action) => {
  let { type, payload } = action

  switch (type) {
    case FETCH_LIST_SINGER:
      return {
        ...state,
        page: payload.page,
        singerId: payload.singerId
      }; 
    case FETCH_LIST_SINGER_FAIL:
      return initialState;
    case FETCH_LIST_SINGER_SUCCESS:
      return {
        ...state,
        singers: payload.data,
        more: payload.more
      };  
    default:
      return state;
  }
}

export default combineReducers({
    playlist,
    album,
    singer
})
  