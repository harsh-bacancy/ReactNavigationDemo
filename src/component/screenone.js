import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class ScreenOne extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#000' }}>
                   Screen 1
                </Text>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('ScreenTwo',{
                    itemList: 'here is screen one data'
                })}>
                    <Text style={{ fontSize: 20, color: '#FFF' ,backgroundColor:'red'}}>
                        Click Here
                    </Text>
                </TouchableOpacity>
            </View>
        );


    }
}

export default ScreenOne;