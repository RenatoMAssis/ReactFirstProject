/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert } from 'react-native';

var {height, width} = Dimensions.get('window');

type Props = {};
export default class Dashboard extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      data: [
          {desc:'text', price:'200'},
          {desc:'text', price:'200'},
          {desc:'text', price:'200'},
          {desc:'text', price:'200'},
          {desc:'text', price:'200'},
          {desc:'text', price:'200'},
      ]
    };
  }
  
  _onPress = () => {
    Alert.alert("Atenção", "Não tem bi");
  };
  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#605751"
        }}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
      <FlatList
        renderItem={({item, index}) => 
        <TouchableOpacity onPress={this._onPress} style={{backgroundColor: index%2==0 ? "#e6e6ff" : "white"}}>
          <View>
            <Text style={styles.item}>
              {item.desc} R$ {item.price}
            </Text>
          </View>
        </TouchableOpacity>
        }
        ItemSeparatorComponent={this.renderSeparator}
        // ListHeaderComponent={this.renderHeader}
        data = {this.state.data}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})