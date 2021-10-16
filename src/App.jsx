import * as React from 'react'
import './App.scss'
import { StoreProvider } from './components/StoreProvider'
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Jeden } from './components/Jeden';
import { Header } from './components/Header';
import { Modal } from './components/Modal';

const App = () => {
  return(
    <StoreProvider>
      <Header/>
      <Jeden/>
      <Modal/>
    </StoreProvider>
  )
}

export default App