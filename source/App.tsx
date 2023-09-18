import React from 'react';

import PageHeader from './pages/PageHeader';
import PageMain from './pages/PageMain';
import Modal from './components/modal/Modal';

function App() {
  return (
    <div id="app">
      <PageHeader />
      <PageMain />
      <Modal />
    </div>
  );
}

export default App;