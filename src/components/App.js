import { useState } from "react";
import "./App.css";
import SignIn from "./SignIn";
import Main from "./Main";

function App() {
  const [name, setName] = useState("");
  if (name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
}

export default App;
