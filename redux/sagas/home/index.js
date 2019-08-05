import homeBanner from './banner';
import playlist from './playlist';
import album from './album';
import newsong from './newsong';
import rank from './rank';

const homeSagas = [
  ...homeBanner,
  ...playlist,
  ...album,
  ...newsong,
  ...rank,
];

export default homeSagas;