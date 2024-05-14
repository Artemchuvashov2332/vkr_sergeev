export interface IProductGroup {
    id: number,
    imageSrc: string,
    group: string,
    title: string,
}

export interface IProduct {
    id: number,
    imageSrc: string,
    title: string,
    description: string,
    rating: number | string,
    price: number
}

// export interface IProductSubTypes {
//     id: number,
//     imageSrc: string,
//     type: string,
//     title: string
// }