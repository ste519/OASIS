import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import App from './App';
import SignIn from './SignIn';
import Onboard from './Onboard';
import Alert from './Alert';
import Emergency from './Emergency';
import CriticalQuestions from './CriticalQuestions';
import * as serviceWorker from './serviceWorker';
import Symptoms from './Symptoms';
import Status from './Status';
import Confirm from './Confirm';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
import MomentUtils from '@date-io/moment';
import Dashboard from './Dashboard';
import HealthMeasurements from './HealthMeasurements';
import SignUp from './SignUp';
import MoreInfo from './MoreInfo';

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Router>
        <Link to="/" className="header">OASIS</Link>
        {/* <Link className="sign-in-btn" to="/signin"><span>SIGN IN</span></Link> */}

        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signin" component={SignIn} />
          <Route path="/onboard" component={Onboard} />
          <Route path="/alert" component={Alert} />
          <Route path="/emergency" component={Emergency} />
          <Route path="/questions" component={CriticalQuestions} />
          <Route path="/symptoms" component={Symptoms} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/status" component={Status} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/measurements" component={HealthMeasurements} />
          <Route path="/signup" component={SignUp} />
          <Route path="/moreinfo" component={MoreInfo} />

        </Switch>
      </Router>
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
