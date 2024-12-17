import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";

import "@infragistics/igniteui-react-grids/grids/combined.js";
import "@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css";

import { IgrGridModule } from "@infragistics/igniteui-react-grids";

declare module "react" {
  interface CSSProperties {
    "--ig-size"?: string;
  }
}

[IgrGridModule].forEach((module) => module.register());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
