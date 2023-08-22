import React, { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";// Example import for React Router

function App() {
  return (
    <div className="App">
      <h1>hello my friend</h1>
      <Routes>
        <Route path="/" element={<PersonForm/>} />
      </Routes>
    </div>
  );
}
export default App;

