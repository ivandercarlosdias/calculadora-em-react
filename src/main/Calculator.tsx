import Display from '../components/Display'
import Button from '../components/Button'

import './Calculator.scss'

export default function Calculator() {
    return (
        <>
            <h1 className="title">Calculadora em React</h1>
            <div className="calculator">
                <Display value={0} />
                <Button triple label="AC" />
                <Button operator label="/" />
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button operator label="*" />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button operator label="-" />
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button operator label="+" />
                <Button double label="0" />
                <Button label="." />
                <Button operator label="=" />
            </div>
        </>
    )
}
