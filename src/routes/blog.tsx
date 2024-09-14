/**
 * The blog route.
 *
 * @module
 */
import Markdown from "react-markdown";
import { useReadQuery } from "@apollo/client";
import { useLoaderData } from "react-router-dom";
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
 * The blog route component.
 *
 * @function
 */
function Component() {
  const { data } = useReadQuery(useLoaderData() as Api.Response["repository"]);
  return (
    <main id="blog">
      {data.repository?.discussions?.nodes?.map((discussion) => (
        <article key={discussion?.title} className="prose px-4">
          <header>
            <p className="italic">
              {new Date(discussion?.createdAt).toLocaleString()}
            </p>
            <h1>{discussion?.title}</h1>
          </header>
          <section>
            <Markdown>{discussion?.body}</Markdown>
          </section>
        </article>
      ))}
    </main>
  );
}

/**
 * Exports this module.
 *
 * @exports
 */
export default { Component, loader };
