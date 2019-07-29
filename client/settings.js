import React, { Component } from 'react';
import { Text, View, TouchableOpacity, RefreshControl, ScrollView } from 'react-native';
import {getAllPosts, setupPostListener} from './backend'
import Post from './post'


export default class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      refreshing: false,
    }
  }

  render() {
    return (
      <View>
        <Text>This is the new settings page</Text>
      </View>
    );
  }
}