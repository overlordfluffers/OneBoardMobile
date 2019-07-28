import React from 'react'
import { createNewPost } from './backend'
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import styles from './styles'



export default class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  createPost = async () => {
    let { displayname, city, state } = this.props
    let { content } = this.state
    let res = await createNewPost({ displayname, city, state, content })
    this.setState({ content: '' })
  }

  handleChange = (text) => {
    this.setState({content:text})
  }

  render() {
    return(
      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleChange}
          value={this.state.content}
        />
        <TouchableOpacity onPress={this.createPost}>
          <Text style={styles.postButton}>Post</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
