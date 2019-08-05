import Playlist from '../../components/List/Playlist'
import { fetchListPlaylist } from '../../redux/actions/list';

Playlist.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  
  store.dispatch(fetchListPlaylist(0));

  return { isServer };
};

export default Playlist;