/**
 * Features route.
 *
 * @module
 */

/**
 * Exports this module.
 *
 * @exports
 */
export default function () {
  return (
    <main className="prose max-w-none">
      <section>
        <h1>Features</h1>
      </section>
      <section>
        <h2>How it Works</h2>
        <article>
          <h3>Play</h3>
          <p>
            Click <code>Play</code> and the app will launch you into a local
            Counter-Strike server.
          </p>
        </article>
        <article>
          <h3>Ready Up</h3>
          <p>Your teammates and opponents are added to the server as bots.</p>
          <p>
            Type <code>.ready</code> in chat to start the match!
          </p>
        </article>
        <article>
          <h3>gg wp</h3>
          <p>
            Once the match is over, the results are <em>automagically</em>{" "}
            recorded and reflected in the app!
          </p>
        </article>
      </section>
      <section>
        <h2>Manage your Squad</h2>
        <img src="/squad.png" />
        <p>You'll need a good squad on your road to glory.</p>
        <p>
          Build and train your squad to gain an edge when you're battling it out
          in-game or simply simming matches.
        </p>
      </section>
      <section>
        <h2>Transfer Market</h2>
        <img src="/transfers.png" />
        <p>
          As you move up through the ranks you'll be able to trade for better
          players in an in-depth transfer market.
        </p>
      </section>
      <section>
        <h2>CS:S and Below are Supported</h2>
        <img src="/cs16.png" />
        <p>
          If you're feeling nostalgic, you can play all of your matches in{" "}
          <code>CS:S</code>, <code>CS:CZ</code> or <code>CS 1.6</code>.
        </p>
        <p>
          In this mode, the app has more control of the game server so you'll
          get a customized MOTD, an LO3 config when you ready up and dynamic
          fake bot pings which will bring you back to the glory days of your
          preferred nostalgic game!
        </p>
      </section>
    </main>
  );
}
