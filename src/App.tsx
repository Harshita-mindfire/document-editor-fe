import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [editorValue, setEditorValue] = useState("");
  return (
    <ReactQuill
      theme="snow"
      value={editorValue}
      onChange={(e) => setEditorValue(e)}
    />
  );
}

export default App;
