import { Fragment } from "react";
import Form from "./component/Form/Form";
import Head from "./component/header/Head";
import AdapterJalaali from '@date-io/jalaali';
import { LocalizationProvider } from "@mui/x-date-pickers";

function App() {
  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterJalaali}>
        <Head />
        <Form />
      </LocalizationProvider>
    </Fragment>
  );
}

export default App;
