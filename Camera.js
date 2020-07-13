import React, {Component} from 'react'
import {Text, View, Alert, ActivityIndicator, TouchableOpacity, StyleSheet} from 'react-native'
import {Camera} from 'expo-camera'
import {setStatusBarHidden} from 'expo-status-bar'
import CameraReverse from './CameraReverse'
import ImageTaken from './ImageTaken'
import Snap from './Snap'

export default class UserCamera extends Component {
    constructor(props) {
        super(props)

        this.state = {
            permission: null,
            type: Camera.Constants.Type.back,
            image: ''
        }

        this.camera = React.createRef()

        this.onSnap = this.onSnap.bind(this)
        this.onReverse = this.onReverse.bind(this)
        this.onCancel = this.onCancel.bind(this)

        this.onUnknownPermission = this.onUnknownPermission.bind(this)
        this.renderUnknownPermission = this.renderUnknownPermission.bind(this)
        this.renderFalsePermission = this.renderFalsePermission.bind(this)
        this.renderTruePermission = this.renderTruePermission.bind(this)
        this._render = this._render.bind(this)
    }


    async componentDidMount() {
        try {
            const {canAskAgain, expires, granted, status} = await Camera.getPermissionsAsync()
            this.setState({permission: status === 'granted'})
            return;
        } catch (error) {
            console.log(error)
        }

    }

    async onSnap() {
        try {
            const data = await this.camera.current.takePictureAsync()
            console.log(data)
            this.setState({image: data.uri})
        } catch (error) {
            console.error(error)
        }
    }

    onCancel() {
        this.setState({image: ''})
    }


    onReverse() {
        const {type} = this.state
        type === Camera.Constants.Type.back
            ? this.setState({type: Camera.Constants.Type.front})
            : this.setState({type: Camera.Constants.Type.back})
    }

    async onUnknownPermission() {
        const {status} = await Camera.requestPermissionsAsync()
        this.setState({permission: status === 'granted'})
    }

    renderUnknownPermission() {
        return (
            <ActivityIndicator />
        )
    }

    renderFalsePermission() {

        return (
            <View>
                <Text>Permission is denied</Text>
            </View>
        )
    }

    renderTruePermission() {
        setStatusBarHidden(true)
        const {type} = this.state
        return (
            <Camera
                style={styles.camera}
                quality={1}
                ref={this.camera}
                type={type}
            >
                <Snap callbackOnSnap={this.onSnap} />
                <CameraReverse callbackOnReverse={this.onReverse} />

            </Camera>
        )
    }




    _render() {
        const {permission, image} = this.state
        if (image) {
            return (
                <ImageTaken image={image} callbackOnCancel={this.onCancel} />
            )
        }

        if (permission === null) {
            this.onUnknownPermission()
            return this.renderUnknownPermission()
            return
        }
        if (permission === false) {
            return this.renderFalsePermission()
        }
        if (permission === true) {
            return this.renderTruePermission()
        }
    }



    render() {
        return (
            <View style={styles.container}>
                {this._render()}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
    ,
    camera: {
        flex: 1
    }
})