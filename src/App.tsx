import Alert from "./components/Alert";
import ButtonAlert from "./components/ButtonAlert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>text</Alert>}
      <ButtonAlert onClickItem={() => setAlertVisibility(true)}>Nazwa</ButtonAlert>
    </div>
   
  )
}

export default App;