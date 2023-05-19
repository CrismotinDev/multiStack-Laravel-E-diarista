import { ThemeProvider } from "@mui/material";
import "../ui/styles/globals.css";
import type { AppProps } from "next/app";
import theme from "ui/themes/theme";
import Head from "next/head";
import Header from "@/ui/components/surfaces/Header/Header";
import Footer from "@/ui/components/surfaces/Footer/Footer";
import { AppContainer } from "ui/styles/pages/_app.style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>e-diaristas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link href="/fonts" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
