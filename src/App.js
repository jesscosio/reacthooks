import React from 'react';
import ViewportProvider from "./components/util/ViewportProvider";
import Welcome from './components/Welcome';
import './App.css';

function App() {
  return (
    <ViewportProvider>
      <div className="App">
        <header className="App-header">
          
        </header>
        <Welcome name="Jess"/>
      </div>
    </ViewportProvider>
  );
}

export default App;
