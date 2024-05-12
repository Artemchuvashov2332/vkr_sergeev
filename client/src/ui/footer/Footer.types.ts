export interface IFooterLink {
    text: string
}

export interface IFooterProps {
    navLinks: IFooterLink[]
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