import ReactDom from "react-dom";
import { createElement } from "react";

export function render(component: React.FunctionComponent): void {
	const container = document.getElementById("root");
	const indexComponent = createElement(component);

	ReactDom.render(indexComponent, container);
}
