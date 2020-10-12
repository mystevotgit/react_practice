import React, {useEffect, useState} from 'react';
import './App.css';
import Form from "./components/Form";
import Display from "./components/Display";

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
    </div>
  );
}

export default App;
