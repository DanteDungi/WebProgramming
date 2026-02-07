import { useState } from 'react';
import InputComponent from './components/InputComponent';
import ResultComponent from './components/ResultComponent';
import "tailwindcss";
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
        <div className="flex flex-col justify-center items-center h-screen bg-white">
            <h1 className="text-center text-yellow-400 font-bold">Calculator</h1>

            <div className="">
                <InputComponent setValue={setFirstValue}/>
                <select 
                    className=""
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
