import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        defaultProps={{
          Container: {
            sizes: {
              xs: 480,
              sm: 640,
              md: 768,
              lg: 1024,
              xl: 1280,
              xl2: 1600,
            },
          },
        }}
        theme={{
          fontFamily: "Lato, sans-serif",
          fontFamilyMonospace: "Lato, sans-serif",
          headings: { fontFamily: "Lato, sans-serif" },
          colorScheme: "light",
          colors: {
            primary: ["#FFFFFF"],
            secondary: ["#F0F3F8"],
            tertiary: ["#38369A"],
            quaternary: ["#18222F"],
            quinary: ["#141D36"],
            senary: ["#E3EAF2"],
          },
          fontSizes: {
            xs: 12,
            sm: 14,
            base: 16,
            lg: 18,
            xl: 20,
            xl2: 24,
            xl3: 30,
            xl4: 36,
          },
          breakpoints: {
            xs: 480,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xl2: 1600,
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
