import ReactDOM from 'react-dom';
import Header from 'components/header';
import * as Pages from 'pages';
import 'assets/global.css';


function Index() {
  return (
    <>
      <Header />
      <Pages.Home />
    </>
  );
}


ReactDOM.render(
  <Index />,
  document.getElementById( 'root' )
);
