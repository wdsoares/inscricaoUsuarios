import React, {Component} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

export default class Formulario extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            nome: '',
            email: '',
            cidade: ''
        }
        this.onChangeCidade = this.onChangeCidade.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.addInscrito = this.addInscrito.bind(this);
    }

    onChangeNome = (event) =>
    {
        this.setState({nome: event.target.value})
    }
    onChangeEmail = (event) =>
    {
        this.setState({email: event.target.value})
    }
    onChangeCidade = (event) =>
    {
        this.setState({cidade: event.target.value})
    }

    addInscrito = () =>
    {
        var novoInscrito = '{"name":"' + this.state.nome + '", "email": "' + this.state.email + '", "address": { "city" : "' + this.state.cidade +'"}}';
        this.props.inscreverPessoa(JSON.parse(novoInscrito));
        this.setState(
            {
                nome: '',
                cidade: '',
                email: ''
            }
        )
    }

    render()
    {
        return(
            <>
                <Row className="justify-content-sm-center mt-5 mb-5">
                    <Col xs="6">
                        <Form>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={this.state.nome} onChange={this.onChangeNome} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Cidade</Form.Label>      
                                <Form.Control type="text" value={this.state.cidade} onChange={this.onChangeCidade} />
                            </Form.Group>
                            <Button variant="outline-primary" onClick={this.addInscrito}>
                                Cadastrar
                            </Button>
                        </Form>
                    </Col>
                </Row>    
            </>
        );
    }
}