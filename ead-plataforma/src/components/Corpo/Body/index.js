import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import instance from '../../../service/api';

import './index.sass';
import ListItem from './ListItem';
import Container from './Container';
import { Icon } from 'antd';

export default function Body() {
  const lista = useSelector(state => state.listaExibir.users)
  const listaDados = useSelector(state => state.lista)
  const dispatch = useDispatch();
  const [position, changePosition] = useState(0);
  let adim = 0;
  let inadim = 0;
  let valor = 0;

  function contArray(array) {
    if(listaDados.users) {
      for(let i = 0; i < array.length; i++ ){
        if(array[i].status === '0'){
          adim = adim + 1
          valor = valor + parseFloat(array[i].amount)
        } else {
          inadim = inadim + 1
          valor = valor + parseFloat(array[i].amount)
        }
      }
    }
  }


  useEffect(() => {
    const buscarDados = async () => {
      await instance.get('/users?offset=0')
        .then(response => {
          dispatch({type: 'listar', lista: response.data})
        })
    }
    const buscarDadosLista = async () => {
      await instance.get('/users')
        .then(response => {
          dispatch({type: 'dados', lista: response.data})
        })
    }
    
    if(!lista) {
      buscarDados();
      buscarDadosLista();
    }
  })

  function  voltarlista() {
    const buscarDados = async () => {
      await instance.get('/users?offset=0')
        .then(response => {
          dispatch({type: 'listar', lista: response.data})
        })
    }
    buscarDados();
    changePosition(0)
  }

  function avancarlista() {
    const buscarDados = async () => {
      await instance.get('/users?offset=10')
        .then(response => {
          dispatch({type: 'listar', lista: response.data})
        })
    }
    buscarDados();
    changePosition(1)
  }



  return (
    <div className="body" onLoad={contArray(listaDados.users)}>
      <div className="titulo">
        <div className="separator"></div>
        <p>Visão geral</p>
      </div>
      <div className="container-geral">
        <Container texto="Total de clientes" dados={listaDados.total}/>
        <Container texto="Clientes inadimplentes" dados={inadim} />
        <Container texto="Clientes adimplentes" dados={adim}/>
        <Container texto="Total arrecadado" dados={valor}/>
      </div>

      <div className="titulo">
        <div className="separator"></div>
        <p>Clientes cadastrados</p>
      </div>
      <div className="lista-container">
        <ul className="lista">
          {lista ? lista.map(usuario => <ListItem key={usuario.id} user={usuario} />): null}
        </ul>
        <div className="button-area">
          <button onClick={voltarlista} id="botao-antes"><Icon type="left" style={{ color: '#fff' }} /></button>
          {position === 0 ? <p><strong>1</strong> 2</p> : <p>1 <strong>2</strong></p>}
          <button onClick={avancarlista} id="botao-depois"><Icon type="right" style={{ color: '#fff' }} /></button>
        </div>
      </div>
    </div>
  );
}
