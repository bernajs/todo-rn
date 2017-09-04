import React, { Component } from 'react';

import { View, Text, Button } from 'react-native'


class Index extends Component {

    goLogin() { Actions.login() }
    goIndex() { Actions.index() }

    render() {
        return (
            <View>
                <Text>Root</Text>
                <Button title="Login" onPress={this.goLogin}></Button>
                <Button title="Index" onPress={this.goIndex}></Button>
            </View>
        );
    }
}

export default Index;