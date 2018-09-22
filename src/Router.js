import React from 'react';
import { TabNavigator }  from 'react-navigation';

import Login from '../screens/login';
import Main from '../screens/main';

export const Tabs = TabNavigator({
    Login: {
        screen: Login,
    }, 
    Main: {
        screen: Main,
    }
});