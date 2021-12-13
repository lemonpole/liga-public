import React from 'react';
import useProgressiveImg from 'hooks/progressive-image';
import logoImg from 'assets/logo.png';
import logoImgTiny from 'assets/logo.tiny.png';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import './header.css';


function NavItem({ children, to, ...props }: LinkProps ) {
  const resolved = useResolvedPath( to );
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`${match ? 'active' : 'glownote'} small-caps lower`}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
}


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
          <NavItem to="/">{'Home'}</NavItem>
          <NavItem to="/features">{'Features'}</NavItem>
          <li className="glownote small-caps lower"><a href="/">{'Support'}</a></li>
        </ul>
      </nav>
    </header>
  );
}
