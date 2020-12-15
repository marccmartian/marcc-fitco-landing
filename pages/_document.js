import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";
import Layout from "../components/layout";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=UA-76827860-2`}
                        crossOrigin='anonymous'
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'UA-76827860-2', {
                                  page_path: window.location.pathname,
                                });
                              `,
                        }}
                        crossOrigin='anonymous'
                    />
                </Head>
                <body>
                <Layout>
                    <Main />
                </Layout>
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
