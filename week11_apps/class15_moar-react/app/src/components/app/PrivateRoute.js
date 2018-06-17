import React from 'react';
import { connect } from 'react-redux';
import { getUser } from './reducers';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, render, ...rest }) => {

  return <Route {...rest} render={props => {
    if(!user) return <Redirect to="/auth/signin" state={{ from: props.location }}/>;
    if(Component) return <Component {...props}/>;
    if(render) return render(props);
  }}/>;

};

export default connect(
  state => ({ user: getUser(state) }),
  null
)(PrivateRoute);

