/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Header, Title, Body } from 'native-base'

// Components
// import Login from './login'
// import Index from './index'
import Todos from './todos'
import AddTodo from './add_todo'
// import Servicios from './servicios'

// 
import { Actions, Router, Scene, Stack } from 'react-native-router-flux'

export default class prueba extends Component {
    render() {
        return (
            <Router>
                <Stack hideNavBar>
                    <Scene key="todos" component={Todos}></Scene>
                    <Scene key="addTodo" component={AddTodo} />
                </Stack>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('prueba', () => prueba);
