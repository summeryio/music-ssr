import {
  FETCH_HOME_ALBUM,
  FETCH_HOME_ALBUM_FAIL,
  FETCH_HOME_ALBUM_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  albums: []
};

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

export default album

