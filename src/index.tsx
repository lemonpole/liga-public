/**
 * The application's index file.
 *
 * @module
 */
import React from "react";
import ReactDOM from "react-dom/client";
import Partials from "@liga/partials";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/jetbrains-mono";
import "./index.css";

/**
 * The index component
 *
 * @component
 */
function Index() {
  return (
    <React.StrictMode>
      <Partials.Splash />
      <main>
        <Partials.Download />
        <Partials.How />
        <Partials.Features />
        <Partials.Changelog />
      </main>
      <Partials.Footer />
    </React.StrictMode>
  );
}

/**
 * React bootstrapping logic.
 *
 * @name anonymous
 * @function
 */
(() => {
  // grab the root container
  const container = document.getElementById("root");

  if (!container) {
    throw new Error("Failed to find the root element.");
  }

  // render the react application
  ReactDOM.createRoot(container).render(<Index />);
})();
