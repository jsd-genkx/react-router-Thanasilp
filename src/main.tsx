import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);