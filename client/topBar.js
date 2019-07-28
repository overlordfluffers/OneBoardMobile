import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {getRandomDisplayname} from './backend'
import {Button} from 'react-native'
import styles from './styles'


export default class TopBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName: this.props.displayName || '@RandomUsername',
      city: this.props.city || 'NoWhere',
      state: this.props.state || 'NoWhere',
    }

    // this.iconColor = ICON_COLORS[Math.floor(Math.random() * ICON_COLORS.length)];
  }

  async componentWillMount() {
    let { data } = await getRandomDisplayname()
    if (data) {
      this.props.setDisplayName(data)
      this.setState({ displayName: data })
    }
  }

  generateNewDisplayname = async () => {
    let { data } = await getRandomDisplayname()
    if (data) {
      this.props.setDisplayName(data)
      this.setState({ displayName: data })
    }
  }

  render() {
    return (
      <View style={styles.topbar}>
        <Text style={styles.userName}>{this.state.displayName}</Text>
        <TouchableOpacity onPress={this.generateNewDisplayname}>
          <Text style={styles.buttonSmall}> Generate New Name </Text>
        </TouchableOpacity>
      </View>
    );
  }
}