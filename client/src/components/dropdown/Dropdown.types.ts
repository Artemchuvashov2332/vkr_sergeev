import { IOptions } from "../../types";

export interface IDropdownProps {
    title: React.ReactNode;
    options: (IOptions & { id: number })[];
}