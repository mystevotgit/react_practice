import React, {useEffect, useState} from 'react';
import './App.css';
import Form from "./components/Form";
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
    const [name, setName] = useState("Anon");
    const [number, setNumber] = useState(0);

    const handleNameChange = (e) => {
        setName(e);
    }

    const handleNumberChange = (e) => {
        setNumber(e);
    }

  return (
    <div className="App">
      <Form onFakeChange={handleNameChange} name="name"/>
      <Form onFakeChange={handleNumberChange} name="number"/>
      <Display name={name} number={number}/>
      <h6>Default: Multiplied by 1</h6>
      <Button step = {1 * number}/>
      <h6>Multiplied by 10</h6>
      <Button step = {10 * number}/>
      <h6>Multiplied by 100</h6>
      <Button step = {100 * number}/>
    </div>
  );
}

export default App;
