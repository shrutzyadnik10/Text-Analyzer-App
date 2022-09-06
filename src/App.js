import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextContainer from './components/TextContainer';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#010208';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextContainer heading="Enter Your Text to Analyze"  mode={mode}/>
      </div>
    </>
  );
}

export default App;
