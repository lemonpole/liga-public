import ReactDOM from 'react-dom';
import Header from 'components/header';
import Hero from 'components/hero/hero';
import 'assets/global.css';


function Index() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}


ReactDOM.render(
  <Index />,
  document.getElementById( 'root' )
);
