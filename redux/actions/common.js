import {
    FETCH_COMMON_COMMENT,
    FETCH_COMMON_COMMENT_FAIL,
    FETCH_COMMON_COMMENT_SUCCESS
} from '../../constants/ActionTypes';
  
export function fetchCommonComment (id) {
    return {
        type: FETCH_COMMON_COMMENT,
        payload: {id}
    };
}
export function fetchCommonCommentSuccess (data) {
    return {
        type: FETCH_COMMON_COMMENT_SUCCESS,
        payload: {data}
    };
}
export function fetchCommonCommentFail () {
    return {
        type: FETCH_COMMON_COMMENT_FAIL,
    };
}