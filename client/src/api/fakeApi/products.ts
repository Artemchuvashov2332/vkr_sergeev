import axios from "axios";
import { ledProducts } from "../../__mocks__";
import { IProduct } from "../../types";

const delay = (fakeData: IProduct[] = [], ms: number = 1000) => new Promise<{ data: IProduct[] }>((res) => setTimeout(() => res({ data: fakeData }), ms))

export const fetchProducts = async (params = {}) => {
    // @ts-expect-error
    const { type, search } = params

    if (type === "led") return delay(ledProducts)

    if (search) {
        if (search === 'all') return delay(ledProducts)

        const hardcodeData = ledProducts.filter(({ title }) => {
            return title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        })

        return delay(hardcodeData)
    }

    return delay([])
}