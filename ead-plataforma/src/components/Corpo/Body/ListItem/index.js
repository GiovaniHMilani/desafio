import React from 'react';

import './index.sass';

export default function ListItem(props) {
  return (
    <li className="item">
      <div className="item-list">
        <img src={props.user.photo_url} alt="Pessoa" />
        <p>{props.user.name}</p>
        <p>{props.user.email}</p>
        <p>{props.user.phone}</p>
        <p>R$ {props.user.amount.replace('.',',')}</p>
        {props.user.status === '0' ? <p>Adimplente</p> : <p style={{color:'#ff0000'}}>Inadimplente</p>}
      </div>
    </li>
  );
}
