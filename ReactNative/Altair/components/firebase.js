import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, AppRegistry, FlatList, ImageBackground,
    Alert, TouchableHighlight, TouchableOpacity
} from 'react-native';
//import firebase from 'react-native-firebase';

//export = public, Component = tag in HTML
export default class BasicFireBase extends Component {
    constructor(props){
        // super goi contructor cua lop cha-Component
           super(props); 
        
    }
    render(){
        return(
            <View style={styles.styleview}>
                <Text style={{color: 'red'}}>FireBase is OK</Text>
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