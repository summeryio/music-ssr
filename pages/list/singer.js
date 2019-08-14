import Singer from '../../components/List/Singer'
import { fetchListSinger } from '../../redux/actions/list';

Singer.getInitialProps = async (props) => {
  const { store, isServer, query } = props.ctx;
  
  store.getState().list.singer.singers = []
  store.dispatch(fetchListSinger(0, query.id));

  return { isServer };
};

export default Singer;