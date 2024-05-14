import { Route, Routes } from "react-router-dom";
import { RouterPaths } from "../constants";
import {
  AboutPage,
  DeliveryPage,
  MainPage,
  NewProductPage,
  NotFoundPage,
  PaymentPage,
  ProductTypesPage,
} from "../pages";

export const Router = () => {
  const componentByRouteDictionary = {
    [RouterPaths.MAIN]: MainPage,
    [RouterPaths.ABOUT]: AboutPage,
    [RouterPaths.NEW_ITEMS]: NewProductPage,
    [RouterPaths.PAYMENT]: PaymentPage,
    [RouterPaths.DELIVERY]: DeliveryPage,
    ":category": ProductTypesPage,
    "*": NotFoundPage,
  };

  return (
    <Routes>
      {Object.entries(componentByRouteDictionary).map(([route, Component]) => (
        <Route key={route} path={route} element={<Component />} />
      ))}
    </Routes>
  );
};
