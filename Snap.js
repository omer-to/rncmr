import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons';

export default class Snap extends Component {
    render() {
        const {callbackOnSnap} = this.props
        return (
            <TouchableOpacity onPress={callbackOnSnap} style={[styles.circle]}>

                {/* <Feather name="camera" color="white" style={{backgroundColor: "black", borderWidth: 0, borderColor: 'black', borderRadius: 12, width: 24, height: 24}} /> */}
                <Feather name='camera' size={36} color='white' />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    circle: {
        position: 'absolute',
        bottom: 40,
        left: 40,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FF5353',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#FF5353',
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },

    },


})