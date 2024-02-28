import React from 'react';
import { setupCookie, getCookie } from './config/mock_cookie/Cookie';
import { Catalog } from './pages';

function App() {
  setupCookie();
  getCookie();

  return <Catalog />;
}

export default App;
