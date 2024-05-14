import { IProduct } from "../types";

export const finishingMaterials: IProduct[] = [
    {
        id: 1,
        imageSrc: "https://example.com/image1.jpg",
        title: "Керамическая плитка",
        description: "Прочная и стойкая к влаге плитка для отделки стен и полов.",
        rating: 4.5,
        price: 500 // Цена в рублях
    },
    {
        id: 2,
        imageSrc: "https://example.com/image2.jpg",
        title: "Ламинат",
        description: "Имитация дерева, ламинат подходит для отделки пола в жилых помещениях.",
        rating: "Отлично",
        price: 700 // Цена в рублях
    },
    {
        id: 3,
        imageSrc: "https://example.com/image3.jpg",
        title: "Обои",
        description: "Разнообразие цветов и текстур, обои подойдут для отделки стен в любом интерьере.",
        rating: 4.0,
        price: 300 // Цена в рублях
    },
    {
        id: 4,
        imageSrc: "https://example.com/image4.jpg",
        title: "Гипсокартон",
        description: "Универсальный материал для создания перегородок, потолков и декоративных элементов.",
        rating: 4.2,
        price: 400 // Цена в рублях
    },
    {
        id: 5,
        imageSrc: "https://example.com/image5.jpg",
        title: "Плиточный клей",
        description: "Специальный клей для керамической плитки, обеспечивает надежное крепление.",
        rating: "Хорошо",
        price: 50 // Цена в рублях
    }
];
