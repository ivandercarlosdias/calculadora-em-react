import './Display.scss'

interface IDisplayProps {
    value: string
}

export default function Display(props: IDisplayProps): JSX.Element {
    return <div className="display">{props.value}</div>
}
