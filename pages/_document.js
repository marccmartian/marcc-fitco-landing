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
                <Head />
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
