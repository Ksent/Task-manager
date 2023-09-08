import React from 'react';

import Modal from './components/modal/Modal';
import PageHeader from './pages/PageHeader';
import PageMain from './pages/PageMain';

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