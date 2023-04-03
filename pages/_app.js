import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ServerStyleSheets } from '@mui/styles';
import theme from "../theme/theme"

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const cache = createCache({ key: "css", prepend: true });
  const sheets = new ServerStyleSheets();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      {sheets.collect(
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </CacheProvider>
  );
}