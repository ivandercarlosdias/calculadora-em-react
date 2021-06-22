import './Button.scss'

interface IButtonProps {
    label: string
    double?: boolean
    triple?: boolean
    operator?: boolean
}

export default function Button(props: IButtonProps): JSX.Element {
    let classes = 'btn '

    if (props.operator) classes += 'operator'
    if (props.double) classes += 'size-2'
    if (props.triple) classes += 'size-3'

    return (
        <button className={classes} onClick={() => console.log(props.label)}>
            {props.label}
        </button>
    )
}
