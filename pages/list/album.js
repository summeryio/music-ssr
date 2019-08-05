import Album from '../../components/List/Album'
import { fetchListAlbum } from '../../redux/actions/list';

Album.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  
  store.dispatch(fetchListAlbum(0));

  return { isServer };
};

export default Album;