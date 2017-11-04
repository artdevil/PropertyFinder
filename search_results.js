'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableHighlight, FlatList, Text, } from 'react-native';

import ListItem from './list_item';

export default class SearchResult extends Component {
  _keyExtractor = (item, index) => index;

  _renderItem = ({ item, index }) => {
    return (
     <ListItem
       item={item}
       index={index}
       onPressItem={this._onPressItem}
     />
    );
  }

  _onPressItem = (index) => {
    console.log("Pressed row: "+index);
  };

  render() {
    return (
      <FlatList
        data={this.props.listings}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}
