import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageWrapper from './components/wrappers/PageWrapper';

import UnderConstruction from './components/pages/UnderConstruction';

//TODO: design/develop main-page and auth-page wrappers
  //finish routing/framework
  //establish connection with API
  //implement Material-UI
  //implement Quill rich-text-editor for review writing

function App() {
  return (
    <div className="App">
      <Router>
        <Route 
          exact={true}
          path="/"
          render={props => {
            return(
              <PageWrapper>
                <UnderConstruction />
              </PageWrapper>
            )
          }}
        />
      </Router>

    </div>
  );
}

export default App;
