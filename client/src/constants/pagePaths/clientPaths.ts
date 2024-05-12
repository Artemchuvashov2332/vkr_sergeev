const productByCategory = ({ category }: { category: string }) => `/${category}`

const productByCategorySubtype = ({ category, subtype }: { category: string, subtype: string }) => `/${category}/${subtype}`

const productItem = ({ id }: { id: number }) => `/product/${id}`

export const RouterPaths = {
    MAIN: '/',
    SALES: 'sales',
    NEW_ITEMS: 'new_items',
    PAYMENT: 'payment',
    DELIVERY: 'delivery',
    LIFTING_SERVICES: 'lifting_services',
    ABOUT: 'about',
    productByCategory,
    productByCategorySubtype,
    productItem,
} 