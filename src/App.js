import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Formulario from './components/Form';
import Lista from './components/Lista';
import {Container} from 'react-bootstrap';

export default class App extends Component {
  constructor()
  {
    super();
    this.state = 
    {
        list: [],

    };
    this.inscreverPessoa = this.inscreverPessoa.bind(this);
  }



  async componentDidMount()
  {
    var aux = await fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
    var listaAux = []

    for(var {name: n, email: e, address: { city: c } } of aux)
    {
        listaAux = [...listaAux, {name: n, email: e, address: { city: c }}]
    }
    this.setState({list: listaAux})
  }

  componentDidUpdate(prevProps, prevState)
  {
    if(this.state.list.length !== prevState.list.length)
    toast.info('Novo inscrito!',
    {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  inscreverPessoa = (pessoa) =>
  {
    this.setState({list: [...this.state.list, pessoa]})
  }

  render()
  {
    return (
      <>
        <Header/>
        <Container fluid="md">
          <Formulario inscreverPessoa = {this.inscreverPessoa}/>
          <Lista list = {this.state.list}/>
          <ToastContainer/>
        </Container>
      </>
    );
  }
}