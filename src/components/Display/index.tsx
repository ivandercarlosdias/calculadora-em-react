import { IDisplayProps } from './type'

import './style.scss'

export default function Display(props: IDisplayProps): JSX.Element {
    return (
        <div className="display">
            <h2>{props.value}</h2>
        </div>
    )
}
