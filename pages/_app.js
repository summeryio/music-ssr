import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import createStore from '../redux/store'

import Layout from '../components/Layout';
import { RouterTitle } from '../constants/ConstTypes';

import winFlex from '../core/mobile'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }
  
  componentDidMount() {
    winFlex(window)

    if (/iphone/i.test(navigator.userAgent)) {
      document.body.style.webkitTapHighlightColor = 'rgba(0,0,0,.05)';
      document.body.classList.add('iPhone');
    } else {
      document.body.classList.add('Android');
    }

    (function () {
        if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
            handleFontSize();
        } else {
            if (document.addEventListener) {
                document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
            } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", handleFontSize);
                document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
            }
        }
        function handleFontSize() {
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
            WeixinJSBridge.on('menu:setfont', function () {
                WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
            });
        }
    })();
  }

  render () {
    const { Component, pageProps, store,  router} = this.props
    return (
      <Container>
        <Provider store={store}>
          <Layout title={RouterTitle[router.pathname] + '网易云音乐'}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
