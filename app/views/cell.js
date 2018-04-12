import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
const {height, width} = Dimensions.get('window')

export default class Cell extends Component {
  static defaultProps = {
    onClickCell: () => {}
  }

  render () {
    const {rowData, onClickCell} = this.props

    return (
      <TouchableOpacity style={styles.container}
        onPress={() => onClickCell(rowData)}
        activeOpacity={1}>
        <Image style={styles.avatar}
          source={{uri: rowData.avatar}}/>
        <Text style={styles.nickName}>
          {rowData.nickName}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 149,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  avatar: {
    width: 88,
    height: 109,
    margin: 20,
  },
  nickName: {
    fontSize: 16,
    color: '#FE6262'
  }
})
