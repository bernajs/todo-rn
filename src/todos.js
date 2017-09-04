import React, { Component } from 'react';

import { ListView, AsyncStorage, View, StyleSheet, TouchableOpacity } from 'react-native'

import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Button, Icon, Fab, Title, List, ListItem, Text } from 'native-base'
// const datas = [
//     'Simon Mignolet',
//     'Nathaniel Clyne',
//     'Dejan Lovren',
//     'Mama Sakho',
//     'Alberto Moreno',
//     'Emre Can',
//     'Joe Allen',
//     'Phil Coutinho',
// ];
class Todos extends Component {
    constructor(props) {
        super(props)
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2, sectionHeaderHasChanged: (s1, s2) => s1 !== s2 });
        this.state = { todos: [] }
    }
    componentDidMount() {
        AsyncStorage.getItem('todos').then((todos) => {
            if (todos) {
                todos = JSON.parse(todos)
                this.setState({ todos })
            } else {
                alert('No tienes ninguna tarea')
            }
        })
    }

    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.todos];
        newData.splice(rowId, 1);
        this.setState({ todos: newData });
        AsyncStorage.removeItem('todos')
        AsyncStorage.setItem('todos', JSON.stringify(newData))
    }


    addTodo() { Actions.addTodo() }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        return (
            <Container>
                <Header style={styles.header}>
                    <Title>Todo List</Title>
                </Header>
                <Content>
                    <List
                        dataSource={this.ds.cloneWithRows(this.state.todos)}
                        renderRow={data =>
                            <TouchableOpacity>
                                <ListItem>
                                    <Text> {data.title} </Text>
                                </ListItem>
                            </TouchableOpacity>}
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => alert(data.title)}>
                                <Icon active name="information-circle" />
                            </Button>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active name="trash" />
                            </Button>}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                        enableEmptySections={true}
                    />
                </Content>
                <Fab position="bottomRight" onPress={this.addTodo}>
                    <Icon name="share"></Icon>
                </Fab>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    headeer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Todos;