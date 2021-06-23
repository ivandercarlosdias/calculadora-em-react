import { useState } from 'react'

import Display from '../components/Display'
import Button from '../components/Button'

import './Calculator.scss'

interface IInitialState {
    displayValue: string
    clearDisplay: boolean
    operator: string | null
    current: string
}

export default function Calculator() {
    const initialState: IInitialState = {
        displayValue: '0',
        clearDisplay: false,
        operator: null,
        current: '0',
    }

    const [calc, setDisplayValue] = useState<IInitialState>(initialState)

    function setOperator(label: string) {
        console.log(label)
    }

    function clearMemory() {
        setDisplayValue(initialState)
    }

    function addDigit(label: string) {
        if (label === '.' && calc.displayValue.includes('.')) return

        const clearDisplay = calc.displayValue === '0' || calc.clearDisplay
        const currentValue = clearDisplay ? '' : calc.displayValue
        const newDisplayValue = currentValue + label

        setDisplayValue((initialState) => ({ ...initialState, displayValue: newDisplayValue, clearDisplay: false }))
    }

    return (
        <>
            <h1 className="title">Calculadora em React</h1>
            <div className="calculator">
                <Display value={calc.displayValue} />

                <Button size="3" label="AC" clear={clearMemory} />
                <Button operator label="/" action={setOperator} />
                <Button label="7" action={addDigit} />
                <Button label="8" action={addDigit} />
                <Button label="9" action={addDigit} />
                <Button operator label="*" action={setOperator} />
                <Button label="4" action={addDigit} />
                <Button label="5" action={addDigit} />
                <Button label="6" action={addDigit} />
                <Button operator label="-" action={setOperator} />
                <Button label="1" action={addDigit} />
                <Button label="2" action={addDigit} />
                <Button label="3" action={addDigit} />
                <Button operator label="+" action={setOperator} />
                <Button size="2" label="0" action={addDigit} />
                <Button label="." action={addDigit} />
                <Button operator label="=" action={setOperator} />
            </div>
        </>
    )
}
