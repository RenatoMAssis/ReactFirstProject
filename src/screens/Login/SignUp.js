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
  TouchableOpacity,
  Alert
} from 'react-native';

type Props = {};
export default class SignUp extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = { username: 'Teste', password: '1234' }
  }

  onPress = () => {
    if (this.state.username == 'Teste' && this.state.password == '1234') {
      Alert.alert(
        'Sucesso',
        'Login realizado com sucesso',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    } else {
      Alert.alert(
        'Erro',
        'Usuário e/ou senha inválidos',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
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
        placeholder='username'
      />
        <TextInput
        style={{height: 40, width: 100, alignItems: 'center'}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        placeholder='password'
        secureTextEntry = { true }
      />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
         <Text> Login </Text>
       </TouchableOpacity>
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