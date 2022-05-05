import React from 'react';

import StartBar from 'components/start-bar';
import { ThemeProvider } from '@react95/core';

import 'App.scss';

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <StartBar />
      </ThemeProvider>
    </div>
  )
}

export default App;
