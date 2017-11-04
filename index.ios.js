'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import SearchPage from './search_page';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class PropertyFinder extends Component {
  render() {
    return (
     <NavigatorIOS
       style={styles.container}
       initialRoute={{
         title: 'Property Finder',
         component: SearchPage,
       }}/>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
