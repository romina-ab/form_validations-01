import { Fragment, useState } from "react";
import Form from "./component/form/Form";
import AcountShow from "./component/modal/AcountShow";

function App() {
  const [isShown, setIsShown] = useState(true);
  const showHandler = () => {
    setIsShown(true);
  };
  const hideHandler = () => {
    setIsShown(false);
  };
  return (
    <Fragment>
      {isShown && <AcountShow onClose={hideHandler}/>}
      <Form onShow={showHandler}/>
    </Fragment>
  );
}

export default App;
