import React from 'react';
import heroImg from 'assets/hero.png';
import heroImgTiny from 'assets/hero.tiny.png';
import useProgressiveImg from 'hooks/progressive-image';
import { Github } from 'api';
import './hero.css';


export default function Hero() {
  const [ src, { blur }] = useProgressiveImg( heroImgTiny, heroImg );
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
          <span>{!! download_info ? 'Download LIGA Esports Manager' : 'Loading...'}</span>
          <small className="upper">{releaseInfo?.name || 'Loading...'}</small>
        </button>
        <h2>
          <span>{'or see '}</span>
          <a
            href={[ Github.API.publicBaseUrl, 'lemonpole/liga-public/releases' ].join( '/' )}
            target="_blank"
            rel="noreferrer"
          >
            {'all releases.'}
          </a>
        </h2>
      </article>
      <article>
        <img
          src={src}
          alt={'LIGA Esports Manager'}
          className={blur ? 'blur' : ''}
        />
      </article>
    </section>
  );
}
