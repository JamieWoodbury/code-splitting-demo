import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const ComponentA = React.lazy(() => import('./src/a')); // eslint-disable-line
const ComponentB = React.lazy(() => import('./src/b')); // eslint-disable-line

const App = () => (
  <Router>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/a" component={ComponentA} />
        <Route path="/b" component={ComponentB} />
        <Route exact path="/" render={() => <Redirect to="/a" />} />
      </Switch>
    </React.Suspense>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
