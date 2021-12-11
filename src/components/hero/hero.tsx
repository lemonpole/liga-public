import React from 'react';
import { Github } from 'api';
import './hero.css';


export default function Hero() {
  const [ loading, setLoading ] = React.useState( false );
  const [ releaseInfo, setReleaseInfo ] = React.useState<Github.ReleaseResponse>();

  React.useEffect( () => {
    setLoading( true );
    Github.API
      .releases( 'lemonpole/liga-public' )
      .then( data => Promise.resolve( setReleaseInfo( data ) ) )
      .then( () => setLoading( false ) )
    ;
  }, []);

  const download_info = Github.API.getDownloadLink( releaseInfo?.assets || [] );
  return (
    <section id="hero">
      <article>
        <h1 className="small-caps lower">
          <span>{'The CS:GO esports sim that puts you in the'}</span><br />
          <b className="glownote">{'game.'}</b>
        </h1>
        <button className="small-caps lower" onClick={() => window.open( download_info )}>
          <span>{!! download_info ? 'Download Installer' : loading ? 'Loading...' : 'Download'}</span>
          <small className="upper">{( releaseInfo?.name || loading ? 'Loading...' : 'Coming soon').replace( 'v', '' )}</small>
        </button>
        <h3>
          <span>{'or see '}</span>
          <a
            href={[ Github.API.publicBaseUrl, 'lemonpole/liga-public/releases' ].join( '/' )}
            target="_blank"
            rel="noreferrer"
          >
            {'all releases.'}
          </a>
        </h3>
      </article>
      <article>
        <video autoPlay muted loop>
          <source
            src={process.env.PUBLIC_URL + '/demo.mp4'}
            type="video/mp4"
          />
        </video>
      </article>
    </section>
  );
}
