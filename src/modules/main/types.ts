export interface IInitialState {
    displayValue: string
    clearDisplay: boolean
    operator: string | null
    values: Array<number>
    valuesIndex: number
}

export interface IViewProps {
    calc: IInitialState
    setOperator(label: string): void
    clearMemory(): void
    addDigit(label: string): void
}
