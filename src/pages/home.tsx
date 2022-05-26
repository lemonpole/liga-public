import Hero from 'components/hero/hero';
import Billboard from 'components/billboard';
import squadImg from 'assets/squad.png';
import squadImgTiny from 'assets/squad.tiny.png';
import sellImg from 'assets/sell.png';
import sellImgTiny from 'assets/sell.tiny.png';
import spectatorImg from 'assets/spectator.jpg';
import spectatorImgTiny from 'assets/spectator.tiny.jpg';
import cs16Img from 'assets/cs16.png';
import cs16ImgTiny from 'assets/cs16.tiny.png';


export default function Home() {
  return (
    <div id="home">
      <Hero />

      <Billboard
        title={'Overview'}
        video={process.env.PUBLIC_URL + '/demo.mp4'}
        videoType="video/mp4"
      >
        <p>
          {`
            There are many CS:GO Esports Simulators out there,
            but LESM is the only one that puts you in the game.
          `}
        </p>
        <ol>
          <li>{'LESM will launch a local CS:GO server.'}</li>
          <li>{'Your teammates and opponents are added to the server as bots.'}</li>
          <li>{'You type '}<code>{'.ready '}</code>{'in chat to start the match.'}</li>
          <li>{'Once the match is over, LESM will save the results.'}</li>
        </ol>
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

      <Billboard
        reverse
        title={'Server configuration.'}
        img={spectatorImg}
        imgTiny={spectatorImgTiny}
      >
        <p>{`
          The goal is immersion and what better way than automatically setting
          team names, logos, and countries in the spectator overlay.

          The server name will also reflect the league or
          tournament that you are actively competing in.
        `}</p>
      </Billboard>

      <Billboard
        title={'CS 1.6 Support.'}
        img={cs16Img}
        imgTiny={cs16ImgTiny}
      >
        <p>{`
          If you're feeling nostalgic, you can play all of your matches in CS 1.6.

          In this mode, LESM has more control of the game server so you'll get
          a customized MOTD, an LO3 config that's executed when you ready up
          and dynamic fake bot pings which will bring you back to the glory
          days of CS 1.6.
        `}</p>
      </Billboard>
    </div>
  );
}
