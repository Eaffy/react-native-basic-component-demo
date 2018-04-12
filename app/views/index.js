import React, { Component } from 'react'
import {
  View,
  Text,
  Modal,
  Button,
  Animated,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Cell from './cell.js'
import StatusBar from './status-bar'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class DemoView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      friends: [{avatar: 'avatar_default', nickName: '2333'}],
      opacity: new Animated.Value(1),
      showModal: true,
      selectItem: {avatar: 'avatar_default', nickName: '2333'}
    };
  }


  _showAnimations = () => {
    Animated.timing(this.state.opacity, {
      toValue: Math.random(1),
      duration: 1000
    }).start()
  }

  _addFriend = () => {
    const {friends, text} = this.state
    friends.splice(0, 0, {avatar: 'avatar_default', nickName: text})
    this.setState({
      friends
    })
  }

  _showModal = (rowData) => {
    this.setState({
      selectItem: rowData,
      showModal: true
    })
  }

  _renderItems = ({item, index}) => {
    return <Cell rowData={item} onClickCell={this._showModal}/>
  }

  _renderButton = () => {
    return (
      <Button
        onPress={this._showAnimations}
        title="animation"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    )
  }

  render () {
    const {friends, opacity, showModal, selectItem} = this.state
    return (
      <View>
        <StatusBar/>
        <TextInput
        style={{height: 40, margin: 5, borderColor: '#5AB963', borderWidth: 2, borderRadius: 5}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        onSubmitEditing={this._addFriend}
        underlineColorAndroid={'transparent'}
        />
        <AnimatedFlatList style={styles.container} data={friends}
          opacity={opacity}
          renderItem={this._renderItems}
          keyExtractor={(item, index) => 'cell' + index}
          KeyboardShouldPersistTaps='handled'/>
        {this._renderButton()}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <TouchableOpacity style={styles.clockButton}
            onPress={() => this.setState({
              showModal: false
            })}
            activeOpacity={1}>
            <Cell rowData={selectItem}/>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginBottom: 40
  },
  clockButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
})
