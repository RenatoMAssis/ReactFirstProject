import React, { Component } from 'react';

import firebase from 'firebase';

import Router from './Router';

const customTextProps = {
  style: {
    fontFamily: 'roboto-regular'
  }
};

console.disableYellowBox = true;

class App extends Component {
  componentWillMount () {
    //Posso Fazer qualquer tipo de configuração global aqui como por exemplo o Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: "AIzaSyCgZZjH1kTjMC30WG0N0TqRy2o2-roy25E",
        authDomain: "reactnativefirstproject-10d89.firebaseapp.com",
        databaseURL: "https://reactnativefirstproject-10d89.firebaseio.com",
        projectId: "reactnativefirstproject-10d89",
        storageBucket: "reactnativefirstproject-10d89.appspot.com",
        messagingSenderId: "627301726170"
      })
    }
  }

  render() {
    return (
      <Router></Router>
    );
  }
}

export default App