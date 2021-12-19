import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/header';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import * as Pages from 'pages';
import 'assets/global.css';


/**
 * Scrolls the user to the top of the page on every page transition.
 */

function ScrollToTop( props: { children: React.ReactNode }) {
  const location = useLocation();
  React.useEffect(
    () => window.scrollTo( 0, 0 ),
    [ location ]
  );

  return <>{props.children}</>
}


function Index() {
  const basename = !!process.env.NODE_ENV && process.env.NODE_ENV === 'production'
    ? process.env.PUBLIC_URL
    : '/'
  ;
  return (
    <HashRouter basename={basename}>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route index element={<Pages.Home />} />
          <Route path="/features" element={<Pages.Features />} />
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
}


ReactDOM.render(
  <Index />,
  document.getElementById( 'root' )
);
