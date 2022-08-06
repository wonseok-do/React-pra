import "./App.css";
import React from "react";
import { Button, Input, TextArea } from "./components";
import useCompletes from "./useCompletes";

function App() {
  const input_ref = React.useRef(null);
  // const [text, setText] = React.useState("");
  const [text, setText] = useCompletes("");
  return (
    <div className="App" style={{ display: "flex", gap: 10 }}>
      <div>
        <TextArea text={text} />
      </div>
      <div>
        <Input input_ref={input_ref} />
        <Button input_ref={input_ref} setText={setText} />
      </div>
    </div>
  );
}

export default App;
