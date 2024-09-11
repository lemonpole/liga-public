/**
 * Home route.
 *
 * @module
 */
import React from "react";
import AppInfo from "package.json";
import Partials from "@liga/partials";
import { GitHub } from "@liga/lib";

/**
 * The route data loader.
 *
 * @function
 */
function loader() {
  const repo = GitHub.getRepoSlugFromURL(AppInfo.repository.url);
  return GitHub.Releases.all(repo);
}

/**
 * The home route component.
 *
 * @function
 */
function Component() {
  return (
    <React.Fragment>
      <Partials.Splash />
      <main>
        <Partials.Download />
        <Partials.How />
        <Partials.Features />
        <Partials.Changelog />
      </main>
    </React.Fragment>
  );
}

/**
 * Exports this module.
 *
 * @exports
 */
export default { Component, loader };
