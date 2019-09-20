import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from '../components/Auth/Login';
import Dashboard from '../components/Department/Dashboard';
import MainFrame from '../share/MainFrame';
import Forms from '../components/Department/Forms';

export const history = createBrowserHistory();

class AppRouter extends React.Component{
  render(){
		return (
			<Router history={history}>
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/login" exact component={Login}/>
            <MainFrame>
              <Route path="/dashboard" exact component={Dashboard}/>
              <Route exact path='/department/form' component={Forms}/>
              <Route exact path='/department/form/:id' component={Forms}/>
            </MainFrame>
          </Switch>
        </React.Fragment>
 			</Router>
		)
	}
}

export default AppRouter;
