import {
  FETCH_HOME_RANK,
  FETCH_HOME_RANK_FAIL,
  FETCH_HOME_RANK_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  ranks: []
};

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

export default rank

