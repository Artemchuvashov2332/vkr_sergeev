import { Route, Routes } from "react-router-dom";
import { RouterPaths } from "../constants";
import { MainPage, PaymentPage } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path={RouterPaths.MAIN} element={<MainPage />} />
      <Route path={RouterPaths.PAYMENT} element={<PaymentPage />} />
    </Routes>
  );
};
