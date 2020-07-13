import React, {Component} from 'react'
import {Image, View, StyleSheet} from 'react-native'
import {setStatusBarHidden} from 'expo-status-bar'
import ImageTakenCancel from './ImageTakenCancel'

export default class ImageTaken extends Component {


    render() {
        setStatusBarHidden(true)
        const {image, callbackOnCancel} = this.props
        return (
            <>
                <Image
                    source={{uri: image}}
                    style={styles.image}
                />
                <ImageTakenCancel callbackOnCancel={callbackOnCancel} />
            </>
        )
    }
}



const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    }
})