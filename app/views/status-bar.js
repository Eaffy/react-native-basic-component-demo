import React, { Component } from 'react'
import {
  View,
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native'

export default class EasyStatusBar extends Component {

  render () {
    const backgroundColor = '#CE3232'
    if (Platform.OS === 'ios') {
      return (
        <View style={[styles.statusBar, {backgroundColor}]}>
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle='light-content'
        />
        </View>
      )
    }
    return (
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle='light-content'
      />
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 20,
    zIndex: 2
  }
})
