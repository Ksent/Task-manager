import React, { useEffect, useRef, useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const innerRef = useRef();
  useEffect(() => innerRef.current && innerRef.current.focus());

  return (
    <div id="app">
      <Header />
      <Main 
        setShow={setModalShow}
      />
      <Modal 
        show={modalShow}
        setShow={setModalShow}
        innerRef={innerRef}
      />
    </div>
  );
}

export default App;