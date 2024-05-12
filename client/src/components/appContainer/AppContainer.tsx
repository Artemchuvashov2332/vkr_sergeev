import { FC, PropsWithChildren } from "react";
import { Container, IContainerProps } from "../container";
import "./PageWrapper.style.css";
import { UI_CONTAINER_MAX_WIDTH_PX } from "../../constants/ui";

export const AppContainer: FC<PropsWithChildren> = ({ children }) => (
  <Container maxWidth={UI_CONTAINER_MAX_WIDTH_PX} margin="0 auto">
    {children}
  </Container>
);
