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
  FETCH_HOME_RANK_SUCCESS,
} from '../../constants/ActionTypes';

export function fetchHomeBanner (pageSize) {
  return {
    type: FETCH_HOME_BANNER,
    payload: {pageSize}
  };
}
export function fetchHomeBannerSuccess (data) {
  return {
    type: FETCH_HOME_BANNER_SUCCESS,
    payload: data
  };
}
export function fetchHomeBannerFail () {
  return {
    type: FETCH_HOME_BANNER_FAIL,
  };
}


export function fetchHomePlaylist () {
  return {
    type: FETCH_HOME_PLAYLIST
  };
}
export function fetchHomePlaylistSuccess (data) {
  return {
    type: FETCH_HOME_PLAYLIST_SUCCESS,
    payload: data
  };
}
export function fetchHomePlaylistFail () {
  return {
    type: FETCH_HOME_PLAYLIST_FAIL,
  };
}


export function fetchHomeAlbum () {
  return {
    type: FETCH_HOME_ALBUM
  };
}
export function fetchHomeAlbumSuccess (data) {
  return {
    type: FETCH_HOME_ALBUM_SUCCESS,
    payload: data
  };
}
export function fetchHomeAlbumFail () {
  return {
    type: FETCH_HOME_ALBUM_FAIL,
  };
}

// 新歌
export function fetchNewsong () {
  return {
    type: FETCH_HOME_NEWSONG
  };
}
export function fetchNewsongSuccess (data) {
  return {
    type: FETCH_HOME_NEWSONG_SUCCESS,
    payload: data
  };
}
export function fetchNewsongFail () {
  return {
    type: FETCH_HOME_NEWSONG_FAIL,
  };
}


// 榜单
export function fetchRank () {
  return {
    type: FETCH_HOME_RANK
  };
}
export function fetchRankSuccess (data) {
  return {
    type: FETCH_HOME_RANK_SUCCESS,
    payload: data
  };
}
export function fetchRankFail () {
  return {
    type: FETCH_HOME_RANK_FAIL,
  };
}