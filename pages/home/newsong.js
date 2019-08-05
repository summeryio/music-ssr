import Newsong from '../../components/Home/Newsong'
import { fetchNewsong } from '../../redux/actions/home';

Newsong.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  
  if (store.getState().home.newsong.newsongs.length === 0) {
    store.dispatch(fetchNewsong());
  }

  return { isServer };
};

export default Newsong;