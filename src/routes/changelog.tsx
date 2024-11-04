/**
 * Changelog route.
 *
 * @module
 */
import React from "react";
import ReactMarkdown from "react-markdown";
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
    <main className="prose max-w-none">
      <section>
        <h1>Changelog</h1>
      </section>
      {Array.isArray(releases) &&
        releases
          .filter((release) => release?.description)
          .map((release) => (
            <section key={release?.name + "__changelog"}>
              <ReactMarkdown
                children={release?.description}
                components={{
                  a(props) {
                    return (
                      <a href={props.href} target="_blank" rel="noreferrer">
                        {props.children}
                      </a>
                    );
                  },
                }}
              />
            </section>
          ))}
    </main>
  );
}
