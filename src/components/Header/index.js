import React, {Component} from 'react'
import {Navbar} from 'react-bootstrap'
import './Header.css'


export default class Header extends Component
{
    render()
    {
        return(
            <>
                <Navbar variant="dark" className="head">
                    <Navbar.Brand>
                        Gente que Soma
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }
}