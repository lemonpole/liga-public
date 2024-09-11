/**
 * Changelog partial.
 *
 * @module
 */
import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import { GitHub } from "@liga/lib";

/**
 * Exports this module.
 *
 * @exports
 */
export default function () {
  const releases = useLoaderData() as Array<GitHub.ReleaseResponse>;
  return (
    <section id="changelog">
      <header>
        <h2>Release Notes</h2>
      </header>
      {Array.isArray(releases) &&
        releases
          .filter((release) => release.body)
          .map((release) => (
            <article
              key={release.name + "__changelog"}
              className="prose w-full max-w-none prose-h2:text-left"
            >
              <Markdown>{release.body}</Markdown>
            </article>
          ))}
    </section>
  );
}
