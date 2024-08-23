/**
 * Changelog component.
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
  const [releases, setReleases] = React.useState<
    Awaited<ReturnType<typeof GitHub.Releases.all>>
  >([]);

  React.useEffect(() => {
    GitHub.Releases.all(GitHub.getRepoSlugFromURL(AppInfo.repository.url)).then(
      (release) => setReleases(release),
    );
  }, []);

  return (
    <section id="changelog">
      <header>
        <h2>Release Notes</h2>
      </header>
      {releases
        .filter((release) => release.body)
        .map((release) => (
          <article
            key={release.name + "__changelog"}
            className="prose-h2:text-left prose w-full max-w-none"
          >
            <Markdown>{release.body}</Markdown>
          </article>
        ))}
    </section>
  );
}
