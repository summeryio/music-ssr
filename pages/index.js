import Recommend from '../components/Home/Recommend'
import { fetchHomeBanner, fetchHomePlaylist, fetchHomeAlbum } from '../redux/actions/home';

Recommend.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  
  if (store.getState().home.banner.banners.length === 0) {
    store.dispatch(fetchHomeBanner());
  }
  if (store.getState().home.playlist.playlists.length === 0) {
    store.dispatch(fetchHomePlaylist());
  }
  if (store.getState().home.album.albums.length === 0) {
    store.dispatch(fetchHomeAlbum());
  }

  return { isServer };
};

export default Recommend;