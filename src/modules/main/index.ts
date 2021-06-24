import { createElement, useState } from 'react'

import { IInitialState, IViewProps } from './types'
import { initialState } from './data'

import Main from './view'

import './style.scss'

export default function MainContainer(): JSX.Element {
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

    const viewProps: IViewProps = { calc, setOperator, clearMemory, addDigit }

    return createElement(Main, viewProps)
}
