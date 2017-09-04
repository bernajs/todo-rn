import React, { Component } from 'react';
import axios from 'axios'
// 
import { Container, Content, Col, Grid, Row } from 'native-base'
class Servicios extends Component {
    componentDidMount() {
        axios.get('http://localhost/homepro/_ctrl/ctrl.service.php?exec=getServicios')
            .then(servicios => {
                console.log(servicios)
            })
    }

    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default Servicios;