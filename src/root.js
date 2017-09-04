import React, { Component } from 'react';

import { View, Text, Button } from 'react-native'

import { Actions } from 'react-native-router-flux'

class Index extends Component {

    goLogin() { Actions.login() }
    goIndex() { Actions.index() }
    goServicios() { Actions.servicios() }
    
    render() {
        return (
            <View>
                <Text>Root</Text>
                <Button title="Login" onPress={this.goLogin}></Button>
                <Button title="Index" onPress={this.goIndex}></Button>
                <Button title="Servicios" onPress={this.goServicios}></Button>
            </View>
        );
    }
}

export default Index;