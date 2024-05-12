import { ILinkItem } from "../../types"

export interface IFooterProps {
    navLinks: ILinkItem[]
    address?: string,
    contacts?: {
        type: 'phone' | 'email',
        value: string
    }[],
    socialLinks?: {
        text: string,
        icon: string
        value: string
    }[],
    additionalInfo?: string
}