import playlist from './playlist';
import album from './album';
import comment from './comment';

const listSagas = [
  ...playlist,
  ...album,
  ...comment
];

export default listSagas;