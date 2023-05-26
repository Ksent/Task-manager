import React, { useState } from 'react';

import Header from './components/Header'
import TaskList from './components/TaskList';
import Modal from './components/Modal';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="tasker">
      <Header 
        setShow={setModalShow}
      />
      <TaskList 
        setShow={setModalShow}
      />
      <Modal 
        show={modalShow}
        setShow={setModalShow}
      />
    </div>
  );
}

export default App;