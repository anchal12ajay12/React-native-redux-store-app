import React, { Component } from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
import Header from './app/components/Header';
import Bar from './app/components/Bar';


export default class App extends Component{
  render(){
  return (
      <View style={styles.container}>
        <Header />
        <Bar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,1)',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

AppRegistry.registerComponent('App',() => App);
