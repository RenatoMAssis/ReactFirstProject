/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, username: "", password: "" }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Login
        </Text>
        <TextInput
        style={{height: 40, width: 100}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
        placeholder="username"
      />
        <TextInput
        style={{height: 40, width: 100, alignItems: 'center'}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        placeholder="password"
      />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
         <Text> Login </Text>
       </TouchableOpacity>

       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});