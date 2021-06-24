import { useState } from 'react'

import Display from '../components/Display'
import Button from '../components/Button'

import './Calculator.scss'

interface IInitialState {
    displayValue: string
    clearDisplay: boolean
    operator: string | null
    values: Array<number>
    valuesIndex: number
}

export default function Calculator() {
    const initialState: IInitialState = {
        displayValue: '0',
        clearDisplay: false,
        operator: null,
        values: [0, 0],
        valuesIndex: 0,
    }

    const [calc, setDisplayValue] = useState<IInitialState>(initialState)

    function setOperator(label: string) {
        if (calc.valuesIndex === 0) {
            setDisplayValue((initialState) => ({
                ...initialState,
                operator: label,
                valuesIndex: 1,
                clearDisplay: true,
            }))
        } else {
            const equals = label === '='
            const currentOperator = calc.operator

            const newValues = { ...calc.values }

            try {
                newValues[0] = eval(`${newValues[0]} ${currentOperator} ${newValues[1]}`)
            } catch (error) {
                newValues[0] = calc.values[0]
            }
            newValues[1] = 0

            setDisplayValue(() => ({
                displayValue: newValues[0].toString(),
                clearDisplay: !equals,
                operator: equals ? null : currentOperator,
                values: newValues,
                valuesIndex: equals ? 0 : 1,
            }))
        }
    }

    function clearMemory() {
        setDisplayValue(initialState)
    }

    function addDigit(label: string) {
        if (label === '.' && calc.displayValue.includes('.')) return

        const clearDisplay = calc.displayValue === '0' || calc.clearDisplay
        const currentValue = clearDisplay ? '' : calc.displayValue
        const newDisplayValue = currentValue + label

        setDisplayValue((initialState) => ({
            ...initialState,
            displayValue: newDisplayValue,
            clearDisplay: false,
        }))

        if (label !== '.') {
            const i = calc.valuesIndex
            const newValue = parseFloat(newDisplayValue)
            const newValues = { ...calc.values }
            newValues[i] = newValue

            setDisplayValue((initialState) => ({
                ...initialState,
                values: newValues,
            }))
        }
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
