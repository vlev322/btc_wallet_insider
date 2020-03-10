import ReactDom from "react-dom";
import { createElement } from "react";

import { IndexComposition } from "./components/IndexComposition";

const container = document.getElementById("root");
const indexComponent = createElement(IndexComposition);

ReactDom.render(indexComponent, container);
