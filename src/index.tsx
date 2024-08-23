/**
 * The application's index file.
 *
 * @module
 */
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "@liga/routes";
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
      <Routes.Splash />
      <main>
        <Routes.Download />
        <Routes.How />
        <Routes.Features />
        <Routes.Changelog />
      </main>
      <Routes.Footer />
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
