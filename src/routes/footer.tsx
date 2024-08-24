/**
 * Footer component.
 *
 * @module
 */
import AppInfo from "package.json";
import footer from "../assets/footer.png";
import { FaGithubAlt, FaHome } from "react-icons/fa";

/** @constant */
const links = [
  {
    url: AppInfo.homepage,
    description: "LIGA Esport Manager's official website",
    icon: FaHome,
  },
  {
    url: AppInfo.repository.url,
    description: "View source on GitHub",
    icon: FaGithubAlt,
  },
];

/**
 * Exports this module.
 *
 * @exports
 */
export default function () {
  return (
    <footer className="center relative h-64">
      <section className="absolute inset-0 overflow-hidden opacity-90">
        <img
          src={footer}
          alt="A screenshot of de_dust2 from CS 1.6."
          className="h-full w-full object-cover"
        />
      </section>
      <ul className="relative grid grid-cols-2 gap-4">
        {links.map((link) => (
          <li key={link.url + "__footer"}>
            <a
              className="center size-16 rounded-full border-2 border-current p-4"
              href={link.url}
              target="_blank"
            >
              <span className="sr-only">{link.description}</span>
              <link.icon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
