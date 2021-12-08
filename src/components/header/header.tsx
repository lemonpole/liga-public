import React from 'react';
import useProgressiveImg from 'hooks/progressive-image';
import logoImg from 'assets/logo.png';
import logoImgTiny from 'assets/logo.tiny.png';
import './header.css';


export default function Header() {
  const [ small, setSmall ] = React.useState( false );
  const [ src, { blur }] = useProgressiveImg( logoImgTiny, logoImg );

  React.useEffect( () => {
    window.addEventListener( 'scroll', () => setSmall( window.scrollY > 100 ) );
  }, []);

  return (
    <header className={small ? 'small' : ''}>
      <img
        src={src}
        alt={'LIGA Esports Manager'}
        className={blur ? 'blur' : ''}
      />
      <nav>
        <ul>
          <li className="active small-caps lower"><a href="/">{'Home'}</a></li>
          <li className="glownote small-caps lower"><a href="/">{'About'}</a></li>
          <li className="glownote small-caps lower"><a href="/">{'Support'}</a></li>
        </ul>
      </nav>
    </header>
  );
}
