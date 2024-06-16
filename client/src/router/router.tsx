import { Route, Routes, useParams } from "react-router-dom";
import { RouterPaths } from "../constants";
import {
  AboutPage,
  DeliveryPage,
  MainPage,
  NewProductPage,
  NotFoundPage,
  PaymentPage,
  ProductListPage,
  ProductPage,
  ProductTypesPage,
} from "../pages";
import { SalesPage } from "../pages/SalesPage";

export const Router = () => {
  const componentByRouteDictionary = {
    [RouterPaths.MAIN]: MainPage,
    [RouterPaths.ABOUT]: AboutPage,
    [RouterPaths.NEW_ITEMS]: NewProductPage,
    [RouterPaths.PAYMENT]: PaymentPage,
    [RouterPaths.DELIVERY]: DeliveryPage,
    [RouterPaths.SEARCH]: ProductListPage,
    [RouterPaths.CATERORY]: ProductTypesPage,
    [RouterPaths.TYPE]: ProductListPage,
    [RouterPaths.PRODUCT]: ProductPage,
    [RouterPaths.SALES]: SalesPage,
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
