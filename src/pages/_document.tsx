// Versions 12.0.5 introduced this bug in import, that's why we are importing from dist here,
// check more info here if needed:
// https://gitanswer.com/next-js-eslint-config-next-12-0-5-gives-type-any-is-not-a-constructor-function-type-error-in-document-tsx-javascript-1071098025
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/dist/pages/_document'
import { ServerStyleSheet } from 'styled-components'

//added changes for preventing slow render of css
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />   
            <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100&display=swap" rel="stylesheet" />
            {/* comment this when you have a theme for code blocks */}
            <link
            rel="stylesheet"
            href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument