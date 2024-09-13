/**
 * Changelog partial.
 *
 * @module
 */
import React from "react";
import Markdown from "react-markdown";
import { useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
import { Api } from "@liga/lib";

/**
 * Exports this module.
 *
 * @exports
 */
export default function () {
  const { data } = useReadQuery(useLoaderData() as Api.Response["repository"]);
  const releases = React.useMemo(
    () => data.repository?.releases.nodes || [],
    [data],
  );
  return (
    <section id="changelog">
      <header>
        <h2>Release Notes</h2>
      </header>
      {Array.isArray(releases) &&
        releases
          .filter((release) => release?.description)
          .map((release) => (
            <article
              key={release?.name + "__changelog"}
              className="prose w-full max-w-none prose-h2:text-left"
            >
              <Markdown>{release?.description}</Markdown>
            </article>
          ))}
    </section>
  );
}
