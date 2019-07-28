import React, { Component } from 'react';
import { Text, View, TouchableOpacity, RefreshControl, ScrollView } from 'react-native';
import {getAllPosts, setupPostListener} from './backend'
import Post from './post'

import { newEventSource } from './backend'


export default class PostContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      refreshing: false,
    }
  }

  async componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    let { data } = await getAllPosts()
    if (data) {
      this.setState({ posts: data.reverse() })
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    return (
      <ScrollView keyboardDismissMode={'on-drag'} refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh}/>}>
        {this.state.posts.map((post, idx) => {
          return <Post {...post} key={idx} />
        })}
      </ScrollView>
    );
  }
}