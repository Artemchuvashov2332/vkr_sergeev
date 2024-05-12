import { FC } from "react";
import { Container, IContainerProps } from "../container";

export const PageWrapper: FC<IContainerProps> = ({
  maxHeight,
  maxWidth = 1200,
  minHeight = "100vh",
  width = "100%",
  children,
}) => (
  <Container
    width={width}
    maxHeight={maxHeight}
    maxWidth={maxWidth}
    minHeight={minHeight}
  >
    {children}
  </Container>
);
