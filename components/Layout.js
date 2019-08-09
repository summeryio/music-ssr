import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import BackTop from './BackTop'

import '../static/css/style.scss'

export default ({ title, children }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
    <BackTop />
  </Fragment>
)