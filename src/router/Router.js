import React from 'react';
import {BrowserRouter, Route, Switch,Link , NavLink} from 'react-router-dom';
import Landing from '../component/Landing';
import SignUp from '../component/SignUp';
import SignIn from '../component/SignIn'
// import NotFound from '../component/NotFound';

const Router = () => ( 
 <BrowserRouter>
  <div className='AppRoute'>
      <Switch>
            <Route path="/" component={Landing} exact={true} />
            <Route path="/SignUp" component={SignUp }/>
            <Route path="/SignIn" component={SignIn }/>
            {/* <Route component={NotFound} /> */}
      </Switch>
  </div>
 </BrowserRouter>
);
export default Router;