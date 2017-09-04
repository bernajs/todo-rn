import React, { Component } from 'react';

import { AsyncStorage, StyleSheet, View, Text } from 'react-native'

import { Actions } from 'react-native-router-flux'

import { Container, Button, Content, Header, Title, Form, Item, Input, Label } from 'native-base'
class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = { ttitle: '', active: false }
    }
    addTodo() {
        AsyncStorage.getItem('todos').then((todos) => {
            if (!todos) todos = []; else todos = JSON.parse(todos)
            let saveTodos = JSON.stringify([...todos, { title: this.state.title, active: false }])
            AsyncStorage.setItem('todos', saveTodos)
            Actions.todos()
            // if(!todos) {todos = []} else {console.log(todos)}
            // let formatedTodos = JSON.parse(todos)
            // let todo = this.state.todo
            // this.setState({ todos: formatedTodos })
            // this.setState({ ...this.state.todos, todo })
            // console.log(this.state.todos)
        })
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>Add Todo</Title>
                </Header>
                <Form>
                    <Item floatingLabel>
                        <Label>Nombre</Label>
                        <Input onChangeText={(title) => { this.setState({ title }) }}></Input>
                    </Item>
                    <Button block success onPress={this.addTodo.bind(this)} style={styles.mt2}><Text>Save</Text></Button>
                </Form>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    mt2: { marginTop: 20 }
})
export default Todos;