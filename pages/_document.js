import Document, { Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <meta charSet='utf-8' />
                    <link rel='shortcut icon' href='//s1.music.126.net/style/favicon.ico?v20180823' type='image/ico'/>
                    <link rel="stylesheet" href="//at.alicdn.com/t/font_1109994_skf2hpg1hs.css"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@4.5.0/dist/css/swiper.min.css"></link>
                    <script src="https://cdn.jsdelivr.net/npm/swiper@4.5.0/dist/js/swiper.min.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
