import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {getAllPosts, setupPostListener} from './backend'
import Post from './post'
import {ScrollView} from 'react-native'


export default class PostContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    // console.log('=====================> Post Container')
    // setupPostListener(this.props.displayName, this.appendPostFromListener)
    let { data } = await getAllPosts()
    if (data) {
      this.setState({ posts: data })
      // this.scrollToBottom()
    }
  }

  // appendPostFromListener = (post) => {
  //   console.log(post)
  //   let { data } = post
  //   if (!data) { console.error(post, 'no data found'); return }
  //
  //   let postData = JSON.parse(JSON.parse(data))
  //   if (postData) {
  //     this.setState({ posts: [...this.state.posts, postData] })
  //     // this.scrollToBottom()
  //   }
  }

  // scrollToBottom = () => {
  //   this.el.scrollTop = this.el.scrollHeight;
  // }


  render() {
    return (
      <ScrollView>
        {this.state.posts.map((post, idx) => {
          return <Post {...post} key={idx} />
        })}
      </ScrollView>
    );
  }
}