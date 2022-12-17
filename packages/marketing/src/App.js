import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core//styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({ productionPrefix: 'ma' });

function App() {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
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
