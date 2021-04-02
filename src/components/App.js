import { useState } from "react";
import "./App.css";
import SignIn from "./SignIn";
import Main from "./Main";

function App() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  if (name === "" || room === "") {
    return <SignIn setName={setName} setRoom={setRoom} />;
  } else {
    return <Main name={name} room={room} />;
  }
}

export default App;
