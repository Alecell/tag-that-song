import Document, { Html, Head, Main, NextScript } from 'next/document';

import { html5Shiv } from '~snippets/html5shiv';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script id="html5shiv" dangerouslySetInnerHTML={{ __html: html5Shiv }} />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
