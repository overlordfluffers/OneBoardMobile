import React from 'react';
import moment from 'moment'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'


class Post extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    let { createdAt, displayname, content } = this.props
    return(
      <View style={styles.post}>
        <Text style={styles.postUser}>{ displayname }</Text>
        <Text style={styles.content}>{ content }</Text>
        <Text style={styles.createdAt}>{ moment(createdAt).fromNow() }</Text>
      </View>
    )
  }
}

export default Post