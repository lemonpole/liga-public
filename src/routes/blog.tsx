/**
 * The blog route.
 *
 * @module
 */
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
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
            <ReactMarkdown
              children={discussion?.body}
              rehypePlugins={
                [rehypeRaw] as Parameters<
                  typeof ReactMarkdown
                >[number]["remarkPlugins"]
              }
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
