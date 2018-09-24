import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import Login from './screens/Login/Login';
import SignUp from './screens/Login/SignUp';
import Dashboard from './screens/Main/Dashboard';
import PlaceDetails from './screens/Main/PlaceDetails';
import ForgetPassword from './screens/ForgetPassword/ForgetPassword';

type Props = {};
export default class RouterComponent extends Component<Props> {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
        <View style={styles.container}>
           <Router>
               <Scene key='app'>
                <Scene key='auth' initial hideNavBar>
                    <Scene key='login' component={Login} initial />
                    <Scene key='dashboard' component={Dashboard}/>
                    <Scene key='signUp' component={SignUp} />
                    <Scene key='placeDetails' component={PlaceDetails} />
                    <Scene key='forgetPassword' component={ForgetPassword}/>
                </Scene>                    
               </Scene>                
           </Router>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
