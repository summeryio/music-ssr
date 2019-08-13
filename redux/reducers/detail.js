import { combineReducers } from 'redux';
import {
    FETCH_DETAIL_PLSYLIST,
    FETCH_DETAIL_PLSYLIST_FAIL,
    FETCH_DETAIL_PLSYLIST_SUCCESS,
    
    FETCH_DETAIL_ALBUM,
    FETCH_DETAIL_ALBUM_FAIL,
    FETCH_DETAIL_ALBUM_SUCCESS,

    FETCH_DETAIL_PLSYLIST_COMMENT,
    FETCH_DETAIL_PLSYLIST_COMMENT_FAIL,
    FETCH_DETAIL_PLSYLIST_COMMENT_SUCCESS
} from '../../constants/ActionTypes';
  
const initialState = {
    playlists: {},
    albums: {},
    id: null,
    comments: {}
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

const comment = (state = initialState, action) => {
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
          comments: payload.data
        };  
      default:
        return state;
    }
}

export default combineReducers({
    playlist,
    album,
    comment
})
  