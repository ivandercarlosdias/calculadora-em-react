import './Display.scss'

interface IDisplayProps {
    value: number
}

export default function Display(props: IDisplayProps): JSX.Element {
    return <div className="display">{props.value}</div>
}
