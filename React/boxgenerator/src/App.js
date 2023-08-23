import React, { useState } from 'react';
import './App.css';
import BoxDialog from './components/BoxDialog';
import BoxForm from './components/BoxForm';



function App() {
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState("");

  const youveGotColor = (newColor) => {
    setColors(colors.push(newColor));
  }

  return (
    <>
      <BoxForm
        youveGotColor={youveGotColor}
      />
      {console.log(currentColor)}
      {console.log(colors)}
      <BoxDialog AllColrs={colors} />
    </>
  );
}
export default App;

