import { useState } from "react";
import "./App.css";
import SignIn from "./SignIn";
import Main from "./Main";

function App() {
  const [name, setName] = useState("");

  if (false && name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={"hiroyuki"} />;
  }
}

export default App;
