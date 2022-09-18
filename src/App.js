import { Fragment } from "react";
import Form from "./component/Form/Form";
import Head from "./component/header/Head";
import AdapterJalaali from "@date-io/jalaali";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ToastContainer } from 'react-toastify';
function App() {
  const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterJalaali}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <Head />
            <Form />
            <ToastContainer rtl/>
          </ThemeProvider>
        </CacheProvider>
      </LocalizationProvider>
    </Fragment>
  );
}

export default App;
