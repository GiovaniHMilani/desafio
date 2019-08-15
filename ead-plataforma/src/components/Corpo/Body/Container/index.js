import React from 'react';

import './index.sass'

export default function Container(props) {
  return (
    <div className="container-dados">
      <p>{props.texto}</p>
      {props.dados ? props.texto === 'Total arrecadado' ? <h1>R$ {props.dados.toFixed(2).toString().replace('.', ',')}</h1> : <h1>{props.dados}</h1>: null}
    </div>
  );
}
