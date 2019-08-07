import Album from '../../components/Detail/Album'
import { fetchDetailAlbum } from '../../redux/actions/detail';

Album.getInitialProps = async (props) => {
  const { store, isServer, query } = props.ctx;
  
  store.dispatch(fetchDetailAlbum(query.id));

  return { isServer };
};

export default Album