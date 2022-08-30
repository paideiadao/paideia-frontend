import React, { ReactElement } from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { Box } from "@mui/material";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Space+Grotesk&family=Viga&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <script
            src="https://cdn.tiny.cloud/1/z575wana8isszbqidxprdk233mmp4cra8rapgzfak98yy1u9/tinymce/6/tinymce.min.js"
            referrerPolicy="origin"
          ></script>
        </Head>
        <body>
          <Box sx={{ position: "relative" }}>
            <Main />
            <NextScript />
          </Box>
        </body>
      </Html>
    );
  }
}
