import {
  FETCH_HOME_BANNER,
  FETCH_HOME_BANNER_FAIL,
  FETCH_HOME_BANNER_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  banners: [],
  pageSize: 0
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

export default banner
