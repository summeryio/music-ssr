import fetch from 'isomorphic-unfetch'
import { take, put, fork, select } from 'redux-saga/effects';
import { 
    FETCH_DETAIL_PLSYLIST,
    FETCH_DETAIL_ALBUM,
    FETCH_DETAIL_PLSYLIST_COMMENT
} from '../../constants/ActionTypes';
import { URL_HEADER } from '../../constants/ConstTypes';
import { 
    fetchDetailPlaylistFail, 
    fetchDetailPlaylistSuccess,
    
    fetchDetailAlbumFail, 
    fetchDetailAlbumSuccess,

    fetchDetailPlaylistCommentFail, 
    fetchDetailPlaylistCommentSuccess
} from '../actions/detail';

function* playlist() {
  while(true) {
    const query = yield select(state => state.detail.playlist)

    try {
      const res = yield fetch(`${URL_HEADER}/playlist/detail?id=${query.id}`);
      const data = yield res.json();
      if (data.code === 200) {
        if (data.playlist.tracks.length > 20) {
          data.playlist.tracks = data.playlist.tracks.filter((song, i) => {
            return i < 20
          })
        }
        
        yield put(fetchDetailPlaylistSuccess(data.playlist));
      }
    } catch(error) {
      yield put(fetchDetailPlaylistFail(error));
    }

    yield take(FETCH_DETAIL_PLSYLIST);
  }
}

function* album() {
    while(true) {
      const query = yield select(state => state.detail.album)
  
      try {
        const res = yield fetch(`${URL_HEADER}/album?id=${query.id}`);
        const data = yield res.json();
        if (data.code === 200) {
          yield put(fetchDetailAlbumSuccess(data));
        }
        
      } catch(error) {
        yield put(fetchDetailAlbumFail(error));
      }
  
      yield take(FETCH_DETAIL_ALBUM);
    }
}

function* comment() {
    while(true) {
      const query = yield select(state => state.detail.comment)
  
      try {
        const res = yield fetch(`${URL_HEADER}/comment/playlist?id=${query.id}`);
        const data = yield res.json();
        if (data.code === 200) {
          yield put(fetchDetailPlaylistCommentSuccess(data));
        }
      } catch(error) {
        yield put(fetchDetailPlaylistCommentFail(error));
      }
  
      yield take(FETCH_DETAIL_PLSYLIST_COMMENT);
    }
}


const listSagas = [
    fork(playlist),
    fork(album),
    fork(comment)
];

export default listSagas;