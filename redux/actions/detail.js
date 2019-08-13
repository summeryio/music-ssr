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
export function fetchDetailAlbumSuccess (data, more) {
    return {
        type: FETCH_DETAIL_ALBUM_SUCCESS,
        payload: {data, more}
    };
}
export function fetchDetailAlbumFail () {
    return {
        type: FETCH_DETAIL_ALBUM_FAIL,
    };
}


export function fetchDetailPlaylistComment (id, page) {
    return {
        type: FETCH_DETAIL_PLSYLIST_COMMENT,
        payload: {id, page}
    };
}
export function fetchDetailPlaylistCommentSuccess (data, more) {
    return {
        type: FETCH_DETAIL_PLSYLIST_COMMENT_SUCCESS,
        payload: {data, more}
    };
}
export function fetchDetailPlaylistCommentFail () {
    return {
        type: FETCH_DETAIL_PLSYLIST_COMMENT_FAIL,
    };
}