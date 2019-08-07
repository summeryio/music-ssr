import playlist from './playlist';
import album from './album';

const listSagas = [
  ...playlist,
  ...album
];

export default listSagas;