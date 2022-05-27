import React from 'react';
import { Github } from 'api';
import './hero.css';


export default function Hero() {
  const [ loading, setLoading ] = React.useState( false );
  const [ releaseInfo, setReleaseInfo ] = React.useState<Github.ReleaseResponse>();
  const downloadInfo = Github.API.getDownloadLink( releaseInfo?.assets || [] );
  const versionInfo = releaseInfo?.name || ( loading ? 'Loading...' : 'Coming soon' );

  React.useEffect( () => {
    setLoading( true );
    Github.API
      .releases( 'lemonpole/liga-public' )
      .then( data => Promise.resolve( setReleaseInfo( data ) ) )
      .then( () => setLoading( false ) )
    ;
  }, []);

  return (
    <section id="hero">
      <video autoPlay muted loop playsInline>
        <source
          src={process.env.PUBLIC_URL + '/hero.mp4'}
          type="video/mp4"
        />
      </video>
      <article className="glownote">
        <h1 className="small-caps lower">
          <span>{'An immersive cs:go esports simulator.'}</span>
        </h1>
        <button
          className="small-caps lower"
          onClick={() => window.open( downloadInfo )}
        >
          <span>{!! downloadInfo ? `Download LESM ${versionInfo}` : loading ? 'Loading...' : 'Download'}</span>
        </button>
      </article>
    </section>
  );
}
