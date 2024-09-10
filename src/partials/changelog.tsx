/**
 * Changelog partial.
 *
 * @module
 */
import React from "react";
import Markdown from "react-markdown";
import AppInfo from "package.json";
import { GitHub } from "@liga/lib";

/**
 * Exports this module.
 *
 * @exports
 */
export default function () {
  const [releases, setReleases] =
    React.useState<Array<GitHub.ReleaseResponse>>();

  React.useEffect(() => {
    const repo = GitHub.getRepoSlugFromURL(AppInfo.repository.url);
    GitHub.Releases.all(repo).then(setReleases);
  }, []);

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
