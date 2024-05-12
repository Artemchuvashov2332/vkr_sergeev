import { PropsWithChildren } from "react";

export interface IContainerProps extends PropsWithChildren {
    maxWidth?: number | string,
    maxHeight?: number | string,
    minHeight?: number | string,
    width?: number | string
}