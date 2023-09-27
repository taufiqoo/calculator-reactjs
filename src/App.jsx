import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import Button from './components/ButtonNumber';
import ButtonNumber from './components/ButtonNumber';
import ButtonOperator from './components/ButtonOperator';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => setResult(result.concat(e.target.id));
  const clear = () => setResult('');
  const deleteEl = () => setResult(result.slice(0, -1));
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='calculator'>
      <InputField value={result} />

      <div className='buttons'>
        <ButtonOperator id='AC' text='AC' onClick={clear} />
        <ButtonOperator id='DE' text='DE' onClick={deleteEl} />
        <ButtonOperator id='.' text='.' onClick={handleClick} />
        <ButtonOperator id='/' text='/' onClick={handleClick} />

        <ButtonNumber id='7' text='7' onClick={handleClick} />
        <ButtonNumber id='8' text='8' onClick={handleClick} />
        <ButtonNumber id='9' text='9' onClick={handleClick} />
        <ButtonOperator id='*' text='*' onClick={handleClick} />

        <ButtonNumber id='4' text='4' onClick={handleClick} />
        <ButtonNumber id='5' text='5' onClick={handleClick} />
        <ButtonNumber id='6' text='6' onClick={handleClick} />
        <ButtonOperator id='-' text='-' onClick={handleClick} />

        <ButtonNumber id='1' text='1' onClick={handleClick} />
        <ButtonNumber id='2' text='2' onClick={handleClick} />
        <ButtonNumber id='3' text='3' onClick={handleClick} />
        <ButtonOperator id='+' text='+' onClick={handleClick} />

        <ButtonNumber id='00' text='00' onClick={handleClick} />
        <ButtonNumber id='0' text='0' onClick={handleClick} />
        <ButtonOperator id='=' text='=' onClick={calculate} />
      </div>
    </div>
  );
}

export default App;
