import React from 'react';
import Home from './pages/Home/Home';
import './App.css';
import { BookProvider } from './context/BookContext';

function App() {
  return (
    <div className="App">
      <BookProvider> 
        <Home />
      </BookProvider>
    </div>
  );
}

export default App;