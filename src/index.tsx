/**
 * The application's index file.
 *
 * @module
 */
import "@fontsource-variable/montserrat";
import "@fontsource-variable/jetbrains-mono";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "@liga/routes";
import Partials from "@liga/partials";
import { Api } from "@liga/lib";
import {
  createHashRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";

/** @constant */
const routes = createHashRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        element: <Routes.Home.Component />,
        loader: Routes.Home.loader,
      },
      {
        path: "/blog",
        element: <Routes.Blog.Component />,
        loader: Routes.Blog.loader,
      },
    ],
  },
]);

/**
 * The root component.
 *
 * @function
 */
function Root() {
  // restore smooth scrolling on anchor links
  const location = useLocation();

  React.useEffect(() => {
    const [, id] = window.location.hash.match(/\/#(.+)$/) || [];
    const el = document.getElementById(id);
    el?.scrollIntoView();
  }, [location.hash]);

  return (
    <React.Fragment>
      <ScrollRestoration />
      <Partials.Header />
      <Outlet />
      <Partials.Footer />
    </React.Fragment>
  );
}

/**
 * The index component
 *
 * @function
 */
function Index() {
  return (
    <React.StrictMode>
      <Api.Provider client={Api.client}>
        <RouterProvider router={routes} />
      </Api.Provider>
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
  // handle discord redirect if discord's
  // subdomain is detected
  const [subdomain] = window.location.hostname.split(".");

  if (subdomain && subdomain === "discord") {
    window.location.href = `https://discord.gg/${import.meta.env.VITE_DISCORD_INVITE_CODE}`;
    return;
  }

  // grab the root container
  const container = document.getElementById("root");

  if (!container) {
    throw new Error("Failed to find the root element.");
  }

  // render the react application
  ReactDOM.createRoot(container).render(<Index />);
})();
