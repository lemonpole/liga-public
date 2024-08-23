/**
 * Splash component.
 *
 * @module
 */
import React from "react";
import cx from "classnames";
import logo from "/favicon.svg";
import splash from "../assets/splash.png";
import video from "../assets/splash.mp4";
import { FaBars, FaTimes } from "react-icons/fa";
import { Octocat } from "@liga/components";

/** @constant */
const navItems: Array<{ title: string; url: string }> = [
  { title: "Download", url: "#download" },
  { title: "How it Works", url: "#how-it-works" },
  { title: "Features", url: "#features" },
  { title: "Release Notes", url: "#changelog" },
];

/** @function */
function handleOnScroll() {
  const header = document.querySelector("#root > header") as HTMLElement;
  const page = document.documentElement;
  const difference = page.clientHeight - page.scrollTop - header.offsetHeight;
  header.classList.toggle("fixed-header", difference < 0);
}

/**
 * Exports this module.
 *
 * @exports
 */
export default function () {
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("scroll", handleOnScroll);
    return () => window.removeEventListener("scroll", handleOnScroll);
  }, []);

  return (
    <React.Fragment>
      {/** NAVIGATION OVERLAY */}
      <dialog className={cx("modal", modalOpen && "modal-open")}>
        <button
          className="btn btn-square btn-ghost absolute right-4 top-4 z-10"
          onClick={() => setModalOpen(false)}
        >
          <FaTimes className="text-2xl" />
        </button>
        <section className="fixed inset-0 grid grid-rows-2 place-items-center gap-4 bg-base-100">
          <header className="flex justify-center">
            <img src={logo} className="h-32" />
          </header>
          <nav>
            <ul>
              {navItems.map(({ title, url }) => (
                <li key={title + "__modal"}>
                  <a
                    className="block py-4 text-center text-2xl"
                    href={url}
                    onClick={() => setModalOpen(false)}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </dialog>

      {/** NAVIGATION BAR */}
      <header className="absolute bottom-0 z-20 flex w-full items-center justify-between border-b border-transparent px-8 py-4 text-white">
        <a className="flex items-center gap-3" href="#">
          <img
            src={logo}
            className="-ml-20 h-10 scale-0 transition-all duration-500"
          />
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          <ul className="flex items-center gap-6">
            {navItems.map(({ title, url }) => (
              <li key={title + "__navbar"}>
                <a className="text-sm" href={url}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="btn btn-square btn-ghost sm:hidden"
          onClick={() => setModalOpen(!modalOpen)}
        >
          <FaBars className="text-2xl" />
        </button>
      </header>

      {/** HERO BANNER */}
      <section className="relative grid h-full grid-cols-1 place-items-center gap-6 bg-black sm:grid-cols-2">
        <Octocat />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        >
          <source src={video} type="video/mp4" />
        </video>
        <article className="relative flex flex-col gap-2 self-end sm:gap-4 sm:self-center">
          <img src={logo} className="h-32 text-white sm:h-48" />
          <h2>An immersive CS:GO esports simulator</h2>
        </article>
        <figure className="relative w-2/3 self-start sm:w-10/12 sm:self-center">
          <span
            className="gradient-bg absolute -inset-1 block w-full origin-[50%_50%] rotate-3 rounded-2xl"
            aria-hidden="true"
          />
          <img
            className="relative w-full self-center justify-self-center rounded-xl object-cover"
            alt="LIGA Esports Manager match preview screen"
            src={splash}
          />
        </figure>
      </section>
    </React.Fragment>
  );
}
