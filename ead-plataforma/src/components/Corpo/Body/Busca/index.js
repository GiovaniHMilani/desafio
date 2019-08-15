import React from 'react';
import { useSelector } from 'react-redux';

import ListItem from '../ListItem';
import './index.sass'

export default function Busca(props) {
  const pessoaBusca = useSelector(state => state.listaBusca);

  return (
    <div className="busca-container">
      <div className="titulo">
        <p>Foram encontrados <strong>{pessoaBusca.length} resultados</strong></p>
      </div>
      <ul>
        {pessoaBusca.map(usuario => <ListItem user={usuario} />)}
      </ul>
    </div>
  );
}