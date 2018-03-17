import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, AppRegistry, FlatList, ImageBackground,
    Alert, TouchableHighlight, TouchableOpacity
} from 'react-native';
//import * as firebase from 'firebase';
import {firebaseApp} from '../config/firebase';
//import firebase from 'react-native-firebase';
import Button from 'react-native-button';
import { error } from 'util';

//export = public, Component = tag in HTML
export default class BasicFireBase extends Component {
    constructor(props){
        // super goi contructor cua lop cha-Component
           super(props); 
           this.state = {
               isAuthenticated: false
           };
        
    }
    onAnonymous = () => {
        firebaseApp.auth().signInAnonymously()
        .then(() => {
            console.log('Login OK');
            this.setState({
                // render dc goi lai khi state thay doi
                isAuthenticated: true
            });
        })
        .catch((error)=>{
            console.log(`Login Failed. Error = ${error}`);
        })
    }
    render(){
        return(
            <View style={styles.styleview}>
                <Button containerStyle={{
                    padding: 10,
                    borderRadius: 4,
                    backgroundColor: 'white'

                }}
                        style = {{fontSize: 18, color: 'blue'}}
                        onPress = {this.onAnonymous}
                >
                Login Anonymous
                </Button>
                <Text style={{margin: 20, fontSize: 15}}
                >{this.state.isAuthenticated == true ? "Login in anonymous ": ""}</Text>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    styleview: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#00CC99',
        marginTop: Platform.OS === 'ios' ? 34 : 0
    },
    style2: {
        width: 100, 
        height: 200, 
        backgroundColor: 'blue'
    },
    style3: {
        width: 100, 
        height: 200, 
        backgroundColor: 'red'
    }
});