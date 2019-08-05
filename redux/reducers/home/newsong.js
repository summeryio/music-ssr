import {
  FETCH_HOME_NEWSONG,
  FETCH_HOME_NEWSONG_FAIL,
  FETCH_HOME_NEWSONG_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  newsongs: []
};

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

export default newsong

