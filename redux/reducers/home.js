import { combineReducers } from 'redux';
import {
    FETCH_HOME_BANNER,
    FETCH_HOME_BANNER_FAIL,
    FETCH_HOME_BANNER_SUCCESS,

    FETCH_HOME_PLAYLIST,
    FETCH_HOME_PLAYLIST_FAIL,
    FETCH_HOME_PLAYLIST_SUCCESS,

    FETCH_HOME_ALBUM,
    FETCH_HOME_ALBUM_FAIL,
    FETCH_HOME_ALBUM_SUCCESS,

    FETCH_HOME_NEWSONG,
    FETCH_HOME_NEWSONG_FAIL,
    FETCH_HOME_NEWSONG_SUCCESS,

    FETCH_HOME_RANK,
    FETCH_HOME_RANK_FAIL,
    FETCH_HOME_RANK_SUCCESS
} from '../../constants/ActionTypes';

const initialState = {
    banners: [],
    pageSize: 0,
    playlists: [],
    albums: [],
    newsongs: [],
    ranks: []
};

const banner = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
        case FETCH_HOME_BANNER:
        return {
            ...state,
            pageSize: payload.pageSize
        };  
        case FETCH_HOME_BANNER_FAIL:
        return initialState;
        case FETCH_HOME_BANNER_SUCCESS:
        return {
            ...state,
            banners: payload
        };  
        default:
        return state;
    }
}

const playlist = (state = initialState, action) => {
    let { type, payload } = action
    
    switch (type) {
      case FETCH_HOME_PLAYLIST:
      case FETCH_HOME_PLAYLIST_FAIL:
        return initialState;
      case FETCH_HOME_PLAYLIST_SUCCESS:
        return {
          ...state,
          playlists: payload
        };  
      default:
        return state;
    }
}

const album = (state = initialState, action) => {
    let { type, payload } = action
    
    switch (type) {
      case FETCH_HOME_ALBUM:
      case FETCH_HOME_ALBUM_FAIL:
        return initialState;
      case FETCH_HOME_ALBUM_SUCCESS:
        return {
          ...state,
          albums: payload
        };  
      default:
        return state;
    }
}

const newsong = (state = initialState, action) => {
    let { type, payload } = action
    
    switch (type) {
      case FETCH_HOME_NEWSONG:
      case FETCH_HOME_NEWSONG_FAIL:
        return initialState;
      case FETCH_HOME_NEWSONG_SUCCESS:
        return {
          ...state,
          newsongs: payload
        };  
      default:
        return state;
    }
}

const rank = (state = initialState, action) => {
    let { type, payload } = action
    
    switch (type) {
      case FETCH_HOME_RANK:
      case FETCH_HOME_RANK_FAIL:
        return initialState;
      case FETCH_HOME_RANK_SUCCESS:
        return {
          ...state,
          ranks: payload
        };  
      default:
        return state;
    }
}

export default combineReducers({
    banner,
    playlist,
    album,
    newsong,
    rank
})
  