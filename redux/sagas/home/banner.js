// import fetch from 'isomorphic-unfetch'
import { take, put, fork, select } from 'redux-saga/effects';
import {
  FETCH_HOME_BANNER,
} from '../../../constants/ActionTypes';
import { URL_HEADER } from '../../../constants/ConstTypes';
import { fetchHomeBannerFail, fetchHomeBannerSuccess } from '../../actions/home';

export function* homeBanner() {
  
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


export default [
  fork(homeBanner)
];




