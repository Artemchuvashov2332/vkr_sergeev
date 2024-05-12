import { CSSProperties, PropsWithChildren } from "react";

export type IContainerProps = PropsWithChildren & CSSProperties & {
    maxWidth?: number | string,
    maxHeight?: number | string,
    minHeight?: number | string,
    width?: number | string
}