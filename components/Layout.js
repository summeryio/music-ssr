import { Fragment } from 'react';
import Head from 'next/head';

import '../static/css/style.scss'

export default ({title, children }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </Fragment>
);