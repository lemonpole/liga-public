/**
 * Home route.
 *
 * @module
 */
import React from "react";
import Partials from "@liga/partials";
import { Api } from "@liga/lib";

/**
 * The route data loader.
 *
 * @function
 */
function loader() {
  const variables = Api.getRepoInfo();
  return Api.preloadQuery(Api.Query.repository, { variables });
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
