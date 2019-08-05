import {
  FETCH_HOME_PLAYLIST,
  FETCH_HOME_PLAYLIST_FAIL,
  FETCH_HOME_PLAYLIST_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  playlists: []
};

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

export default playlist

