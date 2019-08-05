import Rank from '../../components/Home/Rank'
import { fetchRank } from '../../redux/actions/home';

Rank.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  
  if (store.getState().home.rank.ranks.length === 0) {
    store.dispatch(fetchRank());
  }

  return { isServer };
};

export default Rank;