import Hero from 'components/hero/hero';
import Billboard from 'components/billboard';
import matchImg from 'assets/match.png';
import matchImgTiny from 'assets/match.tiny.png';
import squadImg from 'assets/squad.png';
import squadImgTiny from 'assets/squad.tiny.png';
import sellImg from 'assets/sell.png';
import sellImgTiny from 'assets/sell.tiny.png';


export default function Home() {
  return (
    <div id="home">
      <Hero />

      <Billboard
        title={'In-game mode.'}
        imgTiny={matchImgTiny}
        img={matchImg}
      >
        <p>
          {`
            Championship final? Don't leave it up to chance. Hop in the game and
            take full control for an incredibly immersive esports experience.
          `}
        </p>
      </Billboard>

      <Billboard
        reverse
        title={'Manage your squad.'}
        imgTiny={squadImgTiny}
        img={squadImg}
      >
        <p>
          {`
            You'll need a good squad on your road to glory.
            Build and train your squad to gain an edge when you're battling
            it out in-game or simply simming matches.
          `}
        </p>
      </Billboard>

      <Billboard
        title={'Trade players.'}
        imgTiny={sellImgTiny}
        img={sellImg}
      >
        <p>
          {`
            As you move up through the ranks you'll be able to trade for better players in an in-depth transfer market.
          `}
        </p>
      </Billboard>

      <Billboard title={'What is this?'}>
        <p>
          {`
            There are many CS:GO Esports Simulators out there,
            but LESM is the only one that puts you in the game.

            This is how it works:
          `}
        </p>
        <ol>
          <li>{'LESM will launch a local CS:GO server.'}</li>
          <li>{'Your teammates and opponents are added to the server as bots.'}</li>
          <li>{'You type '}<code>{'.ready '}</code>{'in chat to start the match.'}</li>
          <li>{'Once the match is over, LESM will save the results.'}</li>
        </ol>
        <img
          src="https://i.imgur.com/aoccxF2.jpeg"
          alt="CS:GO screenshot of the scoreboard"
          className="glow"
        />
      </Billboard>
    </div>
  );
}
