import React, {Component} from 'react';
import {Table, Row, Col} from 'react-bootstrap';

export default class Lista extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            list: []
        }
    }
    render()
    {
        return(
            <>
            <Row>
                <Col>
                    <Table striped bordered hover className="mt-2">
                        <thead>
                            <tr>
                            <th>Nome</th>
                            <th>Cidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.list.map((item, index) => 
                            <tr key = {index}>
                                <td>{item.name}</td>
                                <td>{item.address.city}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                </Col>
            </Row>    
            </>
        );
    }
}