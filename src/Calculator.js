import React, { useState } from 'react'
import './App.css'
import CalculatorOperations from './CalculatorOperations';

const Calculator = () => {
    const [result, setResult] = useState(0);
    const [ans, setAns] = useState(0);
    const [storeVariable1, setStoreVariable1] = useState(0);
    const [storeVariable2, setStoreVariable2] = useState(0);
    const [operatorSelected, setOperatorSelected] = useState('');

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const selectedOperator = (operator) => {
        if (operator === '=') {
            setResult(ans);
        }
        else if (operator === 'C') {
            setStoreVariable1(0);
            setStoreVariable2(0);
            setResult(0);
            setAns(0);
            setOperatorSelected('');
        }
        else {
            setOperatorSelected(operator);
        }
    }

    const numberSelected = (num) => {
        if (operatorSelected !== '') {
            //store 2nd number
            setStoreVariable2(num);
            //calculate here 
            let num1 = storeVariable1;
            let num2 = num;
            // debugger;
            console.log(num1, num2)
            if (operatorSelected === "+") {
                let a = storeVariable1 + num2;
                setAns(a);
            }
            else if (operatorSelected === '-') {
                setAns(num1 - num2)
            }
            else if (operatorSelected === '*') {
                setAns(num1 * num2)
            }
            else if (operatorSelected === '/') {
                setAns(num1 / num2)
            }
            else if (operatorSelected === 'C') {
                //clear all numbers and operators
                setStoreVariable1(0);
                setStoreVariable2(0);
                setOperatorSelected('');
                setResult(0);
                setAns(0);

            }
            else {
                //equal was selected
                setResult(ans);
            }
        }
        else {
            //store 1st number 
            setStoreVariable1(num);
        }
    }

    return (
        <div style={{ marginTop: '1rem' }}>
            <div className='calculatorContainer'>
                {operatorSelected === '' && storeVariable1 === 0 && storeVariable2 === 0 && result === 0 && < div className='calculatorDisplay'>  0</div>}
                {operatorSelected !== '' && storeVariable1 === 0 && storeVariable2 === 0 && result === 0 && < div className='calculatorDisplay'>  0</div>}
                {storeVariable1 !== 0 && operatorSelected === '' && storeVariable2 === 0 && result === 0 && < div className='calculatorDisplay'>  {`${storeVariable1}`}</div>}
                {storeVariable1 !== 0 && operatorSelected !== '' && storeVariable2 === 0 && result === 0 && < div className='calculatorDisplay'>{`${storeVariable1} ${operatorSelected}`}</div>}
                {storeVariable1 !== 0 && operatorSelected !== '' && storeVariable2 !== 0 && result === 0 && < div className='calculatorDisplay'>{`${storeVariable1} ${operatorSelected} ${storeVariable2}`}</div>}
                {storeVariable1 !== 0 && operatorSelected !== '' && storeVariable2 !== 0 && result !== 0 && < div className='calculatorDisplay'>{`${storeVariable1} ${operatorSelected} ${storeVariable2} = ${result}`}</div>}
                <CalculatorOperations setResult={setResult} selectedOperator={selectedOperator} />
                <div className='calculatorNumbers'>
                    {numbers.map((ele, arr, idx) => (<div className='individualNumbers' onClick={() => { numberSelected(ele) }} key={idx}>{ele}</div>))}
                </div>
            </div>
        </div >
    )
}

export default Calculator
