import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class ScreenTwo extends Component {
    render() {
        const itemList = this.props.navigation.getParam('itemList',"other v")
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#000' }}>
                   item:{JSON.stringify(itemList)}
                </Text>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('ScreenOne')}>
                    <Text style={{ fontSize: 20, color: '#FFF' ,backgroundColor:'red'}}>
                        Click Here
                    </Text>
                </TouchableOpacity>
            </View>
        );


    }
}

export default ScreenTwo;