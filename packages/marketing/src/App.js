import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core//styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

function App() {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            {/* <Switch> */}
            <Route path='/' component={Landing} />
            <Route exact path='/pricing' component={Pricing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}

export default App;