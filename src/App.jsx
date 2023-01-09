import './App.css'
import React, { useState } from 'react';

const calcData = [
{id:'pulito', value: 'AC'},
{id:'diviso', value: '/'},
{id:'per', value: 'x'},
{id:'sette', value: '7'},
{id:'otto', value: '8'},
{id:'nove', value: '9'},
{id:'meno', value: '-'},
{id:'sei', value: '6'},
{id:'cinque', value: '5'},
{id:'quattro', value: '4'},
{id:'più', value: '+'},
{id:'tre', value: '3'},
{id:'due', value: '2'},
{id:'uno', value: '1'},
{id:'uguale', value: '='},
{id:'zero', value: '0'},
{id:'decimale', value: '.'},
];

const operatori = ['AC', '/', 'x', '-', '+', '='];

const numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Display = ({input, output}) => (
  <div className="output">
    <span className="result">
      {output}
    </span>
    <span className="input" id="display">
      {input}
    </span>
  </div>
);

const Key = ({
keyData: {id, value}, handleInput  
}) => (
  <button id={id} onClick={() => handleInput(value)}>
 {value}
  </button>
);

const Keyboard = ({handleInput}) => (
  <div className="keys">
    {calcData.map((key) => (
      <Key key={key.id} keyData={key} handleInput={handleInput} />
    ))}
  </div>
);


function App () {

  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');
  const [calculatorData, setCalculatorData] = useState('');

  const handleSubmit = () => {
    console.log({ calculatorData });

    const total = eval(calculatorData);
    setInput(total);
    setOutput(`${total} = ${total}`);
    setCalculatorData(`${total}`);
  };

  const handleClear = () => {
    setInput('0');
    setCalculatorData('');
  };

  const handleNumbers = (value) => {
    if (!calculatorData.length) {
      setInput (`${value}`);
      setCalculatorData (`${value}`);
    } else {
      if (value === 0 && (calculatorData === '0' || input === '0')) {
        setCalculatorData (`${calculatorData}`);
    
      } else {
        const lastChat = calculatorData.charAt(calculatorData.length - 1);
        const isLastChatOperator = lastChat === '*' || operators.includes(lastChat);

        setInput(isLastChatOperator ? `${value}` : `${input}${value}`);

        setCalculatorData(`${calculatorData}${value}`);
      }
    }
  };

  const dotOperator = () => {
    const lastChat = calculatorData.charAt(calculatorData.length - 1);
    if(!calculatorData.length) {
      setInput('0.');
      setCalculatorData('0.');
    } else {
      if (lastChat === '*' || operators.includes(lastChat)) {
        setInput('0.');

        setCalculatorData(`${calculatorData} 0.`)
      } else {
        setInput (
          lastChat === '.' || input.includes('.') ? `${input}` : `${input}`
        );

        const formattedValue = lastChat === '.' || input.includes('.')
        ? `${calculatorData}`
        : `${calculatorData}.`;
        setCalculatorData(formattedValue);
      }
    }
  };
  // Sono arrivato alla linea 111


return (
  <div className="App">
    <div className="calcolatore bg-green-700 p-4">
    <h2 className='frase text-6xl'>Pocket Calculator</h2>
        <Display input={input} output={output} />
        <Keyboard handleInput= {handleInput} />
        </div>
        </div>
);
  
}   

export default App
