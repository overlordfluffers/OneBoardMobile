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
    await this.fetchData()
    let listener = newEventSource(this.props.displayname)
    listener.addEventListener('message', this.appendPostFromListener)
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

  appendPostFromListener = (post) => {
    let { data } = post
    if (!data) { console.error(post, 'no data found'); return }

    let postData = JSON.parse(JSON.parse(data))
    let { posts } = this.state
    posts.unshift(postData)
    if (postData) {
      this.setState({ posts })
    }
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