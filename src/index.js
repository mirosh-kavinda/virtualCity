import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import "./css/styles.css";
import { App } from "./App";
import DotRing from "./components/DotRing";
import { BrowserRouter as Router } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <Suspense fallback={null}>
    <Router>
      <DotRing />
      <App />
    </Router>
  </Suspense>
);
