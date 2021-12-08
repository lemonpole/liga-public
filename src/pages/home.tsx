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
        title={'Play your matches'}
        imgTiny={matchImgTiny}
        img={matchImg}
      >
        {`
          LIGA Esports Manager (LESM) launches CS:GO with bots, team names,
          logos and more for a more immersive simulation experience.
        `}
      </Billboard>

      <Billboard
        reverse
        title={'Manage your squad'}
        imgTiny={squadImgTiny}
        img={squadImg}
      >
        {`
          Your squad's stats will directly
          affect their in-game attributes.

          Train your squad to gain an edge!
        `}
      </Billboard>

      <Billboard
        title={'Trade players'}
        imgTiny={sellImgTiny}
        img={sellImg}
      >
        {'Via an active transfer market you will be able to send or reject offers with other teams.'}
      </Billboard>
    </div>
  );
}
