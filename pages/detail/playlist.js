import Playlist from '../../components/Detail/Playlist'
import { fetchDetailPlaylist } from '../../redux/actions/detail';

Playlist.getInitialProps = async (props) => {
  const { store, isServer, query } = props.ctx;
  
  store.dispatch(fetchDetailPlaylist(query.id));

  return { isServer };
};

export default Playlist