import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    modifier?: 'green' | 'white' | 'outline'
    disabled?: boolean
}