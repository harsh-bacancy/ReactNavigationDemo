import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ScreenOne from './../component/screenone'
import ScreenTwo from './../component/screentwo'
import { createStackNavigator, createAppContainer,createMaterialTopTabNavigator } from 'react-navigation'


const Navigator = createMaterialTopTabNavigator(
    {
        ScreenOne: 
             ScreenOne,
        
        ScreenTwo: 
            ScreenTwo
        
    },
);

const AppContainer= createAppContainer(Navigator)

class MainScreen extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}

export default AppContainer ;