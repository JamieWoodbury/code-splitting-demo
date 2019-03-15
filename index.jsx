import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import ComponentA from './src/a';
import ComponentB from './src/b';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/a">Go to Route A</Link>
        </li>
        <li>
          <Link to="/b">Go to Route B</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/a" component={ComponentA} />
        <Route path="/b" component={ComponentB} />
        <Route exact path="/" render={() => <Redirect to="/a" />} />
      </Switch>
    </div>
  </Router>
);

// const ComponentA = React.lazy(() => import('./src/a'));
// const ComponentB = React.lazy(() => import('./src/b'));

// const App = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/a">Go to Route A</Link>
//         </li>
//         <li>
//           <Link to="/b">Go to Route B</Link>
//         </li>
//       </ul>
//       <React.Suspense fallback={<div>Loading...</div>}>
//         <Switch>
//           <Route path="/a" component={ComponentA} />
//           <Route path="/b" component={ComponentB} />
//           <Route exact path="/" render={() => <Redirect to="/a" />} />
//         </Switch>
//       </React.Suspense>
//     </div>
//   </Router>
// );

ReactDOM.render(<App />, document.getElementById('app'));
