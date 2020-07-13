import React, {Component} from 'react'
import {View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons';


export default class CameraReverse extends Component {
    render() {
        const {callbackOnReverse} = this.props
        console.log(callbackOnReverse)
        return (
            <TouchableOpacity onPress={callbackOnReverse} style={styles.reverse}>
                <Ionicons name="md-reverse-camera" size={36} color="#FF5353" />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    reverse: {
        position: "absolute",
        bottom: 40,
        right: 40
    }
})