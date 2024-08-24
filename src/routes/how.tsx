/**
 * How it works.
 *
 * @module
 */
import React from "react";
import cx from "classnames";
import demo from "../assets/demo.mp4";
import { FaHandshake, FaPlayCircle, FaSteam, FaUsers } from "react-icons/fa";

/** @constant */
const items = [
  {
    title: "Play",
    icon: FaSteam,
    content: (
      <p>
        Click <code>Play</code> and the app will launch you into a local CS:GO
        server.
      </p>
    ),
  },
  {
    title: "Ready Up",
    icon: FaUsers,
    content: (
      <React.Fragment>
        <p>Your teammates and opponents are added to the server as bots.</p>
        <p>
          Type <code>.ready</code> in chat to start the match!
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "GG WP",
    icon: FaHandshake,
    content: (
      <p>
        Once the match is over, the results are <em>automagically</em> recorded
        and reflected in the app!
      </p>
    ),
  },
];

/**
 * Exports this module.
 *
 * @exports
 */
export default function () {
  const [playing, setPlaying] = React.useState(false);

  function toggleVideo(event: React.MouseEvent<HTMLVideoElement, MouseEvent>) {
    setPlaying(!playing);
    if (event.currentTarget.paused) {
      event.currentTarget.play();
    } else {
      event.currentTarget.pause();
    }
  }

  return (
    <section id="how-it-works">
      <header>
        <h2>How it Works</h2>
      </header>
      <figure className="flex w-full justify-center sm:order-last sm:w-1/2">
        <span aria-hidden="true" />
        <video muted loop playsInline onClick={toggleVideo}>
          <source src={`${demo}#t=0.1`} type="video/mp4" />
        </video>
        <button
          className={cx(
            "pointer-events-none absolute z-10 grid size-12 grid-cols-1 place-items-center self-center",
            "rounded-full text-white opacity-90 backdrop-blur-md backdrop-filter",
            playing && "hidden",
          )}
        >
          <FaPlayCircle className="size-12" />
        </button>
      </figure>
      <ul className="grid max-w-4xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.title + "__how"}
            className="flex flex-col items-center gap-4 border border-base-content/10 bg-base-200 p-4"
          >
            <header className="grid size-16 grid-cols-1 place-items-center rounded-full border-2 border-current">
              <item.icon className="text-5xl" />
            </header>
            <p className="text-center text-xl font-extrabold">{item.title}</p>
            <footer className="space-y-4 text-center">{item.content}</footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
