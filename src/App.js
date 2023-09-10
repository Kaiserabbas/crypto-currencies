// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import DetailPage from './DetailPage';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:cityId" component={DetailPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
