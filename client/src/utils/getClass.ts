
export type ModifiersType = Record<string, boolean | string> | string;

export function getClass(baseClass: string, modifiers: ModifiersType = '', additionalClass?: string): string {

    const concatBaseClassWithAdd = (base: string, add: string) => `${base}--${add}`

    const computedAddClass = () => additionalClass ? additionalClass.split(' ') : []

    const computeModifiers = () => {
        if (modifiers && typeof modifiers === 'object') {
            return Object.entries(modifiers || {})
                .filter(([_, value]) => Boolean(value))
                .map(([className]) => concatBaseClassWithAdd(baseClass, className))
        }

        return modifiers ? modifiers.split(' ').map((modifier) => concatBaseClassWithAdd(baseClass, modifier)) : []
    }

    return [
        baseClass,
        ...computeModifiers(),
        ...computedAddClass()
    ].join(' ')
}