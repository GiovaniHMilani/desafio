import React from 'react';
import { useSelector } from 'react-redux';

import './index.sass'

import Header from './Header';
import Body from './Body';
import Busca from './Body/Busca';


export default function Corpo() {
  const busca = useSelector(state => state.busca);

  return (
    <div className="corpo">
      <Header />
      { busca === 0 ? <Body /> : <Busca />}
    </div>
  );
}
