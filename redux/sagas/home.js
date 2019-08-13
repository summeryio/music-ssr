import { take, put, fork, select } from 'redux-saga/effects';
import {
  FETCH_HOME_BANNER,
  FETCH_HOME_PLAYLIST,
  FETCH_HOME_ALBUM,
  FETCH_HOME_NEWSONG,
  FETCH_HOME_RANK
} from '../../constants/ActionTypes';
import { URL_HEADER } from '../../constants/ConstTypes';
import { 
  fetchHomeBannerFail, 
  fetchHomeBannerSuccess,
  
  fetchHomePlaylistFail, 
  fetchHomePlaylistSuccess,

  fetchHomeAlbumFail, 
  fetchHomeAlbumSuccess,

  fetchNewsongFail, 
  fetchNewsongSuccess,

  fetchRankFail, 
  fetchRankSuccess
} from '../actions/home';

function* homeBanner() {
  while(true) {
    const bannerQuery = yield select(state => state.home.banner)
    
    yield take(FETCH_HOME_BANNER);
    try {
      
      const res = yield fetch(`${URL_HEADER}/banner`);
      const data = yield res.json();
      if (data.code === 200) {
        data.banners = data.banners.filter(banner => {
          let type = parseInt(banner.targetType)
          
          if (type === 1 || type === 10 || type === 1000) {
              return true
          }
      })
        
        yield put(fetchHomeBannerSuccess(data.banners));
      }
    } catch(error) {
      yield put(fetchHomeBannerFail(error));
    }
  }
}

function* playlist() {
  while(true) {
    yield take(FETCH_HOME_PLAYLIST);
    try {
      const res = yield fetch(`${URL_HEADER}/personalized?limit=9`);
      const data = yield res.json();
      if (data.code === 200) {
        yield put(fetchHomePlaylistSuccess(data.result));
      }
    } catch(error) {
      yield put(fetchHomePlaylistFail(error));
    }
  }
}

function* album() {
  while(true) {
    yield take(FETCH_HOME_ALBUM);
    try {
      const res = yield fetch(`${URL_HEADER}/top/album?limit=9`);
      const data = yield res.json();
      if (data.code === 200) {
        yield put(fetchHomeAlbumSuccess(data.albums));
      }
    } catch(error) {
      yield put(fetchHomeAlbumFail(error));
    }
  }
}

function* newsong() {
  
  while(true) {
    yield take(FETCH_HOME_NEWSONG);
    try {
      const res = yield fetch(`${URL_HEADER}/playlist/detail?id=3779629`);
      const data = yield res.json();
      if (data.code === 200) {
        data.playlist.tracks = data.playlist.tracks.filter((item, i) => {
          return i < 20
        })
        
        yield put(fetchNewsongSuccess(data.playlist.tracks));
      }
    } catch(error) {
      yield put(fetchNewsongFail(error));
    }
  }
}

function* rank() {
  
  while(true) {
    yield take(FETCH_HOME_RANK);
    try {
      const res = yield fetch(`${URL_HEADER}/toplist`);
      const data = yield res.json();
      if (data.code === 200) {
        yield put(fetchRankSuccess(data.list));
      }
    } catch(error) {
      yield put(fetchRankFail(error));
    }
  }
}


const homeSagas = [
  fork(homeBanner),
  fork(playlist),
  fork(album),
  fork(newsong),
  fork(rank)
];

export default homeSagas;