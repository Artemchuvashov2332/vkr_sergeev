import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../router";
import { Provider as StoreProvider } from "react-redux";
import store from "../store";

export const App: FC = () => {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StoreProvider>
  );
};
