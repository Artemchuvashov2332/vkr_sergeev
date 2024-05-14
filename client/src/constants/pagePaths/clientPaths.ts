const productTypeByCategory = ({ category }: { category: string }) => `/${category}`

const productByType = ({ category, subtype }: { category: string, subtype: string }) => `/${category}/${subtype}`

const productItem = ({ id }: { id: number }) => `/product/${id}`

export const RouterPaths = {
    MAIN: '/',
    SALES: '/sales',
    NEW_ITEMS: '/new_items',
    PAYMENT: '/payment',
    DELIVERY: '/delivery',
    LIFTING_SERVICES: '/lifting_services',
    ABOUT: '/about',
    MANUFACTURERS: '/manufacturers',
    productTypeByCategory,
    productByType,
    productItem,
} 