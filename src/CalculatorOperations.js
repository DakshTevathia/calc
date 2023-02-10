import React from 'react'

const CalculatorOperations = ({ selectedOperator }) => {

    const operationButtonClicked = (op) => {
        if (op === "+") {
            selectedOperator(op)
        }
        else if (op === '-') {
            selectedOperator(op)
        }
        else if (op === '*') {
            selectedOperator(op);
        }
        else if (op === '/') {
            selectedOperator(op);
        }
        else if (op === 'C') {
            selectedOperator(op);
            //clear all operators
        }
        else {
            selectedOperator(op);
        }
    }
    return (
        <div className='calculatorOperationsContainer'>
            <div className='operation' onClick={() => { operationButtonClicked("+") }}>
                +
            </div>
            <div className='operation' onClick={() => { operationButtonClicked("-") }}>
                -
            </div>
            <div className='operation' onClick={() => { operationButtonClicked("*") }}>
                *
            </div>
            <div className='operation' onClick={() => { operationButtonClicked("/") }}>
                /
            </div>
            <div className='operation' onClick={() => { operationButtonClicked("C") }}>
                C
            </div>

            <div className='operation' onClick={() => { operationButtonClicked("=") }}>
                =
            </div>
        </div>
    )
}

export default CalculatorOperations
