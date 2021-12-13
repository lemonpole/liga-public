import Billboard from "components/billboard";
import spectatorImg from 'assets/spectator.jpg';
import spectatorImgTiny from 'assets/spectator.tiny.jpg';


export default function Features() {
  return (
    <div id="features">
      <Billboard title={'Overview'}>
        <p>
          {`
            There are many CS:GO Esports Simulators out there,
            but LESM is the only one that puts you in the game.

            Here's how it works:
          `}
        </p>
        <ol>
          <li>{'LESM will launch a local CS:GO server.'}</li>
          <li>{'Your teammates and opponents are added to the server as bots.'}</li>
          <li>{'You type '}<code>{'.ready '}</code>{'in chat to start the match.'}</li>
          <li>{'Once the match is over, LESM will save the results.'}</li>
        </ol>
        <p>{'Keep scrolling for more details.'}</p>
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
    </div>
  );
}
