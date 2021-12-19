import React from 'react';
import useProgressiveImg from 'hooks/progressive-image';
import logoImg from 'assets/logo.png';
import logoImgTiny from 'assets/logo.tiny.png';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
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
  const [ isOpen, setOpen ] = React.useState( false );

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
        <ul className={isOpen ? 'open' : ''}>
          <NavItem to="/" onClick={() => setOpen( false )}>{'Home'}</NavItem>
          <NavItem to="/features" onClick={() => setOpen( false )}>{'Features'}</NavItem>
          <li className="glownote small-caps lower"><a href="/">{'Support'}</a></li>
        </ul>
      </nav>

      {/* MOBILE-ONLY */}
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </header>
  );
}
