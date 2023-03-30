import React from "react";
import { AuthorizationPage } from "../pages/AuthorizationPage/AuthorizationPage";
import { Routes, Route } from "react-router-dom";
import { useUserIsLoggedIn } from "../modules/AuthorizationForm/helpers/useUserIsLoggedIn";
import { getRouteAuthorization, getRouteTable } from "./const/router";
import { TablePage } from "../pages/TablePage/TablePage";

function App() {
  useUserIsLoggedIn();

  return (
    <Routes>
      <Route path={getRouteAuthorization()} element={<AuthorizationPage />} />
      <Route path={getRouteTable()} element={<TablePage />} />
    </Routes>
  );
}

export default App;
