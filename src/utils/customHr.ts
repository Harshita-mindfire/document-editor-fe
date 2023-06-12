import { Quill } from "react-quill";
import { v4 as uuidv4 } from "uuid";

const CustomHrBlot = Quill.import("blots/block/embed");

export class CustomHr extends CustomHrBlot {
  static blotName = "custom-hr";
  static tagName = "hr";

  static create() {
    const node = super.create();
    node.setAttribute("data-custom-id", uuidv4());
    node.classList.add("dotted-hr");
    return node;
  }
  static value(node: HTMLElement) {
    return node.getAttribute("data-custom-id");
  }
}
