import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import {
  Attachment,
  FormattingOption,
  List,
  Script,
  fontSizeArr,
} from "../../utils/constant";
import "./Editor.scss";

const toolbarOptions = [
  Object.values(FormattingOption),
  [{ script: Script.SUB }, { script: Script.SUPER }],
  [{ align: [] }],
  [{ list: List.ORDERED }, { list: List.BULLET }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ header: [1, 2, 3, false] }],
  [{ size: fontSizeArr }],
  [{ font: [] }],
  [{ color: [] }],
  Object.values(Attachment),
  ["clean"],
];

Quill.register("modules/imageResize", ImageResize);
const Size = Quill.import("attributors/style/size");
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

function Editor() {
  const [editorValue, setEditorValue] = useState("");
  return (
    <ReactQuill
      theme="snow"
      value={editorValue}
      onChange={(e) => {
        console.log(e);
        setEditorValue(e);
      }}
      placeholder="Type something..."
      modules={{
        toolbar: toolbarOptions,
        imageResize: {
          modules: ["Resize", "DisplaySize"],
        },
      }}
    />
  );
}

export default Editor;
