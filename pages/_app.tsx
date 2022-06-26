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
        theme={{
          fontFamily: "Lato, sans-serif",
          fontFamilyMonospace: "Lato, sans-serif",
          headings: { fontFamily: "Lato, sans-serif" },
          colorScheme: "light",
          colors: {
            primary: ["#06283D"],
            secondary: ["#1363DF"],
            tertiary: ["#47B5FF"],
            quaternary: ["#DFF6FF"],
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
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
