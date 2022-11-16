import { NavLink, Outlet } from "react-router-dom";

import "./layout.css";

const navigation = [
  { id: 1, path: "/", title: "Главная" },
  { id: 2, path: "/employees", title: "Сотрудники" },
];

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            {navigation.map(({ id, path, title }) => {
              return (
                <li key={id}>
                  <NavLink to={path}>{title}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
