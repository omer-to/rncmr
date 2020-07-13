import React, {Component} from 'react'
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons';

export default class ImageTakenCancel extends Component {
    render() {
        const {callbackOnCancel} = this.props
        console.log(callbackOnCancel)
        return (
            <TouchableHighlight onPress={callbackOnCancel} style={styles.cancel}>
                <AntDesign name="closecircleo" size={36} color="#FF5353" />
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    cancel: {
        position: 'absolute',
        top: 40,
        left: 40
    }
})