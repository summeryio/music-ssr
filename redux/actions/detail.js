import {
    FETCH_DETAIL_PLSYLIST,
    FETCH_DETAIL_PLSYLIST_FAIL,
    FETCH_DETAIL_PLSYLIST_SUCCESS,

    FETCH_DETAIL_ALBUM,
    FETCH_DETAIL_ALBUM_FAIL,
    FETCH_DETAIL_ALBUM_SUCCESS,

    FETCH_DETAIL_PLSYLIST_COMMENT,
    FETCH_DETAIL_PLSYLIST_COMMENT_FAIL,
    FETCH_DETAIL_PLSYLIST_COMMENT_SUCCESS,
} from '../../constants/ActionTypes';
  
export function fetchDetailPlaylist (id) {
    return {
        type: FETCH_DETAIL_PLSYLIST,
        payload: {id}
    };
}
export function fetchDetailPlaylistSuccess (data) {
    return {
        type: FETCH_DETAIL_PLSYLIST_SUCCESS,
        payload: {data}
    };
}
export function fetchDetailPlaylistFail () {
    return {
        type: FETCH_DETAIL_PLSYLIST_FAIL,
    };
}


export function fetchDetailAlbum (id) {
    return {
        type: FETCH_DETAIL_ALBUM,
        payload: {id}
    };
}
export function fetchDetailAlbumSuccess (data) {
    return {
        type: FETCH_DETAIL_ALBUM_SUCCESS,
        payload: {data}
    };
}
export function fetchDetailAlbumFail () {
    return {
        type: FETCH_DETAIL_ALBUM_FAIL,
    };
}


export function fetchDetailPlaylistComment (id) {
    return {
        type: FETCH_DETAIL_PLSYLIST_COMMENT,
        payload: {id}
    };
}
export function fetchDetailPlaylistCommentSuccess (data) {
    return {
        type: FETCH_DETAIL_PLSYLIST_COMMENT_SUCCESS,
        payload: {data}
    };
}
export function fetchDetailPlaylistCommentFail () {
    return {
        type: FETCH_DETAIL_PLSYLIST_COMMENT_FAIL,
    };
}