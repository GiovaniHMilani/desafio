import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'antd';

import instance from '../../../service/api';

import './index.sass'

export default function Header() {
  const imagem = useSelector(state => state.lista.users)
  const [busca, changeBusca] = useState('');
  const dispatch = useDispatch();

  function exibirMenu() {
    dispatch({type: 'exibir', menu: 1})
  }

  function handleChange(event) {
    changeBusca(event.target.value)
    if (event.target.value.length === 0) {
      dispatch({ type: 'busca', busca: 0 })
    } else {
      const busca = async () => {
        await instance.get(`/search?q=${event.target.value}`)
          .then(response => {
            dispatch({ type: 'busca', lista: response.data.search , busca: 1 })
          })
      }
      busca();
    }
  }

  return (
    <div className="header">
      <Icon onClick={exibirMenu} style={{ fontSize: '18px'}} className="botao-menu" type="menu" />
      <input value={busca} onChange={(event) => handleChange(event)} />
      <Icon type="bell" theme="filled" style={{ fontSize: '18px', color: '#878787' }} />
      {imagem ? <img src={imagem[3].photo_url} alt="Pessoa" /> : null}
      <Icon type="down" style={{ fontSize: '9px', color: '#878787' }} />
    </div>
  );
}
