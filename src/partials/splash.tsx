/**
 * Splash partial.
 *
 * @module
 */
import logo from "/favicon.svg";
import splash from "../assets/splash.png";
import video from "../assets/splash.webm";
import { Octocat } from "@liga/components";

/**
 * Exports this module.
 *
 * @exports
 */
export default function () {
  return (
    <section className="relative grid h-full grid-cols-1 place-items-center gap-6 bg-black px-4 sm:grid-cols-2">
      <Octocat />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover brightness-75"
      >
        <source src={video} type="video/webm" />
      </video>
      <article className="relative flex flex-col gap-2 self-end sm:gap-4 sm:self-center">
        <img src={logo} className="hidden h-32 text-white sm:block sm:h-48" />
        <h2>An immersive CS:GO esports simulator</h2>
      </article>
      <figure className="relative w-full self-start sm:w-4/5 sm:self-center">
        <img
          className="relative w-full self-center justify-self-center rounded-xl object-cover"
          alt="LIGA Esports Manager match preview screen"
          src={splash}
        />
      </figure>
    </section>
  );
}
