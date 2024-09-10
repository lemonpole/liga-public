/**
 * Features partial.
 *
 * @module
 */
import React from "react";
import cs16 from "../assets/cs16.png";
import market from "../assets/market.png";
import squad from "../assets/squad.png";

/** @constant */
const items = [
  {
    title: "Manage your Squad",
    image: squad,
    content: (
      <React.Fragment>
        <p>You'll need a good squad on your road to glory.</p>
        <p>
          Build and train your squad to gain an edge when you're battling it out
          in-game or simply simming matches.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Transfer Market",
    image: market,
    content: (
      <p>
        As you move up through the ranks you'll be able to trade for better
        players in an in-depth transfer market.
      </p>
    ),
  },
  {
    title: "CS 1.6 Mode",
    image: cs16,
    content: (
      <React.Fragment>
        <p>
          If you're feeling nostalgic,&nbsp;
          <code>you can play all of your matches in CS 1.6</code>.
        </p>
        <p>
          In this mode, the app has more control of the game server so you'll
          get&nbsp;
          <code>
            a customized MOTD, an LO3 config when you ready up and dynamic fake
            bot pings
          </code>
          &nbsp; which will bring you back to the glory days of CS 1.6!
        </p>
      </React.Fragment>
    ),
  },
];

/**
 * Exports this module.
 *
 * @exports
 */
export default function () {
  return (
    <section id="features">
      <header>
        <h2>Features</h2>
      </header>
      {items.map((item) => (
        <article
          key={item.title + "__feature"}
          className="flex flex-col place-items-center gap-4 sm:flex-row sm:gap-24 sm:odd:flex-row-reverse"
        >
          <figure className="sm:w-1/2">
            <span aria-hidden="true" />
            <img src={item.image} />
          </figure>
          <aside className="space-y-4 sm:w-1/2">
            <p className="text-xl font-extrabold">{item.title}</p>
            <aside className="space-y-4">{item.content}</aside>
          </aside>
        </article>
      ))}
    </section>
  );
}
