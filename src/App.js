import { Route, Routes } from "react-router-dom";

import { Main } from "./components/Main/Main";
import { Employees } from "./components/Employees/Employees";
import { Layout } from "./components/Layout/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path="employees" element={<Employees />} />
        <Route path="*" element={<p>Страница не найдена</p>} />
      </Route>
    </Routes>
  );
};
