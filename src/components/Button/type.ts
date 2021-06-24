export interface IButtonProps {
    label: string
    size?: string
    operator?: boolean
    action?(label: string): void
    clear?(): void
}
