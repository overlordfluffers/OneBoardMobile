import React, { Component } from 'react';
import {SafeAreaView, Text, View, KeyboardAvoidingView } from 'react-native';
import TopBar from './client/topBar'
import {getInfoFromLatLong} from './client/backend'
import styles from './client/styles'
import PostContainer from './client/postContainer'
import NewPost from './client/createPost'
import Settings from './client/settings'


export default class Index extends Component {

  state = {
    latitude: 0,
    longitude: 0,
    city: '',
    state: '',
    displayName: 'mobileuser',
    settings: false,
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(this.setLocation)
  }

  setDisplayName = (name) => {
    this.setState({displayName:name})
  }

  setLocation = async (position) => {
    if (position.coords) {
      let { latitude, longitude } = position.coords
      if (latitude && longitude) {
        let res = await getInfoFromLatLong(latitude, longitude)
        let { results } = res.data

        let city = results[0].address_components[3].short_name
        let state = results[0].address_components[5].short_name
        this.setState({ latitude, longitude, city, state })
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#204969'}}>
        <KeyboardAvoidingView behavior="padding" enabled style={styles.app}>
          <TopBar setDisplayName={this.setDisplayName}/>
          <Text>{this.state.city + ", " + this.state.state}</Text>
          {!this.state.settings &&
            <View>
              <PostContainer displayname={this.state.displayName}/>
              <NewPost city={this.state.city} state={this.state.state} displayname={this.state.displayName}/>
            </View>}
          {this.state.settings && <Settings/>}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}