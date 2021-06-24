import Button from '../../components/Button'
import Display from '../../components/Display'

import { IViewProps } from './types'

export default function Main(props: IViewProps): JSX.Element {
    const { calc, clearMemory, setOperator, addDigit } = props

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
