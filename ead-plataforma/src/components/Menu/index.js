import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from 'antd';

import './index.sass';
import logo from '../../assets/logo.png';
import balao from '../../assets/balao.png';


export default function Menu() {
  const exibir = useSelector(state => state.menu);
  const dispatch = useDispatch();
  const [estilo, changeEstilo] = useState('menu')


  useEffect(() => {
    if(exibir === 0) {
      changeEstilo('menu')
    }else {
      changeEstilo('menu-exibir')
    }
  },[exibir])


  function ocultarMenu() {
    dispatch({type: 'exibir', exibir: 0})
  }

  return (
    <div id="mySidebar" className={estilo}>
      <div className="logo">
        <img src={logo} alt="Ead Plataforma" />
        <Icon onClick={ocultarMenu} className="icon" style={{ fontSize: '18px', color:'#fff'}} type="close" />
      </div>
      <div className="menu-conteudo">
        <ul className="menu-lista">
          <li>
            <div className="item-menu" style={{ backgroundColor: '#e8f8f5', borderLeft: '4px solid #1bbc9b' }}>
              <div className="container-icon">
                <Icon type="appstore" theme="filled" style={{ fontSize: '16px', color: '#1bbc9b' }} />
              </div>
              <p>Painel</p>
            </div>
          </li>
          <li>
            <div className="item-menu">
              <div className="container-icon">
                <Icon type="setting" theme="filled" style={{ fontSize: '16px', color: '#1bbc9b' }} />
              </div>
              <p>Configuração</p>
            </div>
          </li>
        </ul>
        <div className="menu-sup">
          <img src={balao} alt="Icone Balão" />
          <h2>Suporte</h2>
        </div>
      </div>
    </div>
  );
}
