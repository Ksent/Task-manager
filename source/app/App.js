import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';

function App() {
  const modalShow = useSelector(state => state.modalWindow.modalShow);

  return (
    <div id="app">
      <Header />
      <Main />
      {modalShow && <Modal />}
    </div>
  );
}

export default App;