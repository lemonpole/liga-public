import React from 'react';
import { Github } from 'api';
import './hero.css';


export default function Hero() {
  const [ releaseInfo, setReleaseInfo ] = React.useState<Github.ReleaseResponse>();

  React.useEffect( () => {
    Github.API
      .releases( 'lemonpole/liga-public' )
      .then( setReleaseInfo )
    ;
  }, []);

  const download_info = Github.API.getDownloadLink( releaseInfo?.assets || [] );

  return (
    <section id="hero">
      <article>
        <h1 className="small-caps lower">
          <span>{'The esports simulator that puts you in the '}</span>
          <b>{'game.'}</b>
        </h1>
        <button className="small-caps lower" onClick={() => window.open( download_info )}>
          <span>{!! download_info ? 'Download Installer' : 'Loading...'}</span>
          <small className="upper">{( releaseInfo?.name || 'Loading...' ).replace( 'v', '' )}</small>
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
