import { IButtonProps } from './type'

import './style.scss'

export default function Button(props: IButtonProps): JSX.Element {
    let classes = 'btn '

    if (props.operator) classes += 'operator'

    if (props.size === '2') classes += 'size-2'
    else if (props.size === '3') classes += 'size-3'

    return (
        <button
            className={classes}
            onClick={
                props.label === 'AC' ? props.clear && props.clear : () => props.action && props.action(props.label)
            }
        >
            {props.label}
        </button>
    )
}
