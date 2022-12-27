import './App.css'


const App = () => {

  return (
    /*App----
             Container ----
                            Calculator */
    <div className="App">
    <div className="calcolatore bg-green-700 p-4">
    <h2 className='frase text-6xl'>Pocket Calculator</h2>
    <div className='output'>
      <span className='result'>196</span>
      <span className='input' id='display'>81</span>
    </div>
          <div className="keys">
            <button id='clear'>AC</button>
            <button id='divide'>/</button>
            <button id="multiply">x</button>
            <button className='bg-emerald-500' id="sette">7</button>
            <button className='bg-emerald-500' id="otto">8</button>
            <button className='bg-emerald-500' id="nove">9</button>
            <button className='bg-emerald-500' id="subtract">-</button>
            <button className='bg-emerald-500' id="quattro">4</button>
            <button className='bg-emerald-500' id="cinque">5</button>
            <button className='bg-emerald-500' id="sei">6</button>
            <button className='bg-emerald-500' id="più">+</button>
            <button className='bg-emerald-500' id="uno">1</button>
            <button className='bg-emerald-500'  id="due">2</button>
            <button className='bg-emerald-500' id="tre">3</button>
            <button className='bg-emerald-500' id="uguale">=</button>
            <button className='bg-emerald-500' id="zero">0</button>
            <button className='bg-emerald-500' id="decimal">.</button>
                      </div>
        </div>
        </div>
        
    
  )
}

export default App
