import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import store from '../../redux/store/index'

export default function withAuth(ComponentToProtect) {
  return class extends Component {


    render() {
      const currentState = store.getState();
      if (!currentState.loginReducer.isLoggedIn) {
        return <Redirect to="/login" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}




