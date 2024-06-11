import { IProduct } from "../types";

export const finishingMaterials: IProduct[] = [
  {
    id: 1,
    imageSrc:
      "https://нн-строй.рф/image/cache/data/keramogranit/plitka/ladoga-palevyj-keramicheskaja-plitka-shp200x300mm-300x300.jpg",
    title: "Керамическая плитка",
    description: "Прочная и стойкая к влаге плитка для отделки стен и полов.",
    rating: 4.5,
    price: 500, // Цена в рублях
  },
  {
    id: 2,
    imageSrc:
      "https://нн-строй.рф/image/cache/data/laminat/laminat_vintage_voyage_3003_dub_neapol_33klass-400x400.jpg",
    title: "Ламинат",
    description:
      "Имитация дерева, ламинат подходит для отделки пола в жилых помещениях.",
    rating: 4.9,
    price: 700, // Цена в рублях
  },
  {
    id: 3,
    imageSrc:
      "https://cdn.leroymerlin.ru/lmru/image/upload/dpr_1.0/f_auto/q_auto/w_240/h_240/c_pad/b_white/d_photoiscoming.png/v1710746290/lmcode/yi9wFmF7Ok-z-yNHyHR0mQ/89363290.png",
    title: "Обои",
    description:
      "Разнообразие цветов и текстур, обои подойдут для отделки стен в любом интерьере.",
    rating: 4.0,
    price: 300, // Цена в рублях
  },
  {
    id: 4,
    imageSrc:
      "https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1648462293/lmcode/dxNIVS-Aw0qLuy6hXknj2A/84389470.jpg",
    title: "Гипсокартон",
    description:
      "Универсальный материал для создания перегородок, потолков и декоративных элементов.",
    rating: 4.2,
    price: 400, // Цена в рублях
  },
  {
    id: 5,
    imageSrc:
      "https://cdn.leroymerlin.ru/lmru/image/upload/dpr_1.0/f_auto/q_auto/w_240/h_240/c_pad/b_white/d_photoiscoming.png/v1688383025/lmcode/d1wvLi5dSUm_r9-8EJpJTQ/82040394.jpg",
    title: "Плиточный клей",
    description:
      "Специальный клей для керамической плитки, обеспечивает надежное крепление.",
    rating: 4.1,
    price: 50, // Цена в рублях
  },
];

export const ledProducts: IProduct[] = [
  {
    id: 1,
    title: "Светодиодный светильник",
    description: "LED ДВО 6561-P 595x595x20 36Вт 3000Лм 4000К призма",
    imageSrc:
      "https://нн-строй.рф/image/cache/data/Jelektrotovary/svetilnik/svetilnik-svetodiodnyy-dvo-6561-p-36vt-4000k-s-epra-300x300.png",
    price: 635.0,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Хуй светильник",
    description: "LED 595x595x19 36Вт 3000Лм 4000К матовый",
    imageSrc:
      "https://нн-строй.рф/image/cache/data/podvesnye-potolki/spo-6-36-4k-m-era-svetodiod-300x300.jpg",
    price: 735.0,
    rating: 4.2,
  },
  {
    id: 3,
    title: "Светодиодный светильник",
    description: "LED 595x595x19 36Вт 3060Лм 6000К холодный",
    imageSrc:
      "https://нн-строй.рф/image/cache/data/podvesnye-potolki/svetodiodnyj-svetilnik-led-595x595x19-36vt-3060lm-300x300.jpg",
    price: 1000.0,
    rating: 3.8,
  },
];
