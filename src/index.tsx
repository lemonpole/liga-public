import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade';
import Header from 'components/header';
import Hero from 'components/hero/hero';
import squadImg from 'assets/squad.png';
import squadImgTiny from 'assets/squad.tiny.png';
import sellImg from 'assets/sell.png';
import sellImgTiny from 'assets/sell.tiny.png';
import useProgressiveImg from 'hooks/progressive-image';
import 'assets/global.css';


function Index() {
  const [ squadSrc, { squadBlur }] = useProgressiveImg( squadImgTiny, squadImg );
  const [ sellSrc, { sellBlur }] = useProgressiveImg( sellImgTiny, sellImg );

  return (
    <>
      <Header />
      <Hero />

      <section className="feature-container">
        <Fade bottom>
          <article className="info">
            <h2>
              {'Manage your squad'}
            </h2>
            <p>
              {'Your squad will consist of bots whose stats will directly affect their performance in-game. '}
              {'Train your squad to bump up these base stats.'}
            </p>
          </article>
          <article>
            <img
              src={squadSrc}
              alt={'LIGA Esports Manager'}
              className={squadBlur ? 'blur' : ''}
            />
          </article>
        </Fade>
      </section>

      <section className="feature-container">
        <Fade bottom>
          <article>
            <img
              src={sellSrc}
              alt={'LIGA Esports Manager'}
              className={sellBlur ? 'blur' : ''}
            />
          </article>
          <article className="info">
            <h2>
              {'Trade players'}
            </h2>
            <p>
              {'Via an active transfer market you will be able to send or reject offers with other teams.'}
            </p>
          </article>
        </Fade>
      </section>
    </>
  );
}


ReactDOM.render(
  <Index />,
  document.getElementById( 'root' )
);
