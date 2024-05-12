import { CSSProperties } from "react";

export interface IIconProps {
    name: string;
    width: CSSProperties["width"];
    height: CSSProperties["height"];
    alt?: string;
    style?: CSSProperties;
    throwDefaultIcon?: boolean
}