import { IOptions } from "../../types";
import { ModifiersType } from "../../utils";

export type DropdownOptionsType = IOptions & { id: number }

export interface IDropdownProps {
    title: React.ReactNode;
    options: DropdownOptionsType[];
    modifiers?: ModifiersType
    memuModifiers?: ModifiersType
    onItemClick?: (options: IOptions) => void
}