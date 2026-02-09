import { useState } from 'react';
import InputComponent from './components/InputComponent';
import ResultComponent from './components/ResultComponent';
import './App.css';

function App() {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [operation, setOperation] = useState("+");

    let result = 0;
    switch(operation) {
        case "+":
            result = firstValue + secondValue;
            break;
        case "-":
            result = firstValue - secondValue;
            break;
        case "*":
            result = firstValue * secondValue;
            break;
        case "/":
            if (secondValue == 0) {
                result = NaN;
            } else {
                result = firstValue / secondValue;
            }
            break;
    }
    
    return(
        <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-5xl text-center text-yellow-400 font-bold mb-35">Calculator</h1>

            <div className="flex justify-evenly w-screen">
                <InputComponent setValue={setFirstValue}/>
                <select 
                    className="text-yellow-400 text-white font-bold text-2xl"
                    onChange={(event) => setOperation(event.target.value)}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <InputComponent setValue={setSecondValue}/>
            </div>

            <hr className=""/>

            <ResultComponent displayValue={isNaN(result) ? "Deviding by Zero is not allowed!" : result}/>
        </div>
    );
}

export default App;
