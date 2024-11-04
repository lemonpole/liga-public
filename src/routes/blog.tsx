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
 * Exports this module.
 *
 * @exports
 */
export default function () {
  const { data } = useReadQuery(useLoaderData() as Api.Response["repository"]);

  return (
    <main className="prose max-w-none">
      <section>
        <h1>Blog</h1>
      </section>
      {data.repository?.discussions?.nodes?.map((discussion) => (
        <section key={discussion?.title} className="py-4">
          <header>
            <p className="italic">
              {new Date(discussion?.createdAt).toLocaleString()}
            </p>
            <h1>{discussion?.title}</h1>
          </header>
          <article>
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
          </article>
        </section>
      ))}
    </main>
  );
}
