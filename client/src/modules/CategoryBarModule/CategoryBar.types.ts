import { IProductGroup, ILinkItem } from "../../types";

export interface ICategoryBarMobuleProps {
    links: ILinkItem[];
    items: IProductGroup[];
    itemsType: "category" | "types"
}