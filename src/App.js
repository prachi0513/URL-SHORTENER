import { useState } from 'react';
import './App.css';
import InputShorten from './components/InputShorten';
import LinkResult from './components/LinkResult';
import Background from './components/Background';

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="container">
      <Background/>
      <InputShorten setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
