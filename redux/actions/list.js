import {
    FETCH_LIST_PLSYLIST,
    FETCH_LIST_PLSYLIST_FAIL,
    FETCH_LIST_PLSYLIST_SUCCESS,

    FETCH_LIST_ALBUM,
    FETCH_LIST_ALBUM_FAIL,
    FETCH_LIST_ALBUM_SUCCESS,

    FETCH_LIST_SINGER,
    FETCH_LIST_SINGER_FAIL,
    FETCH_LIST_SINGER_SUCCESS
} from '../../constants/ActionTypes';
  
export function fetchListPlaylist (page) {
    return {
        type: FETCH_LIST_PLSYLIST,
        payload: {page}
    };
}
export function fetchListPlaylistSuccess (data, more) {
    return {
        type: FETCH_LIST_PLSYLIST_SUCCESS,
        payload: {data, more}
    };
}
export function fetchListPlaylistFail () {
    return {
        type: FETCH_LIST_PLSYLIST_FAIL,
    };
}


export function fetchListAlbum (page) {
    return {
        type: FETCH_LIST_ALBUM,
        payload: {page}
    };
}
export function fetchListAlbumSuccess (data, more) {
    return {
        type: FETCH_LIST_ALBUM_SUCCESS,
        payload: {data, more}
    };
}
export function fetchListAlbumFail () {
    return {
        type: FETCH_LIST_ALBUM_FAIL,
    };
}

export function fetchListSinger (page, singerId) {
    return {
        type: FETCH_LIST_SINGER,
        payload: {page, singerId}
    };
}
export function fetchListSingerSuccess (data, more) {
    return {
        type: FETCH_LIST_SINGER_SUCCESS,
        payload: {data, more}
    };
}
export function fetchListSingerFail () {
    return {
        type: FETCH_LIST_SINGER_FAIL,
    };
}