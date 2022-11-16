import { useEffect, useState } from "react";

import "./employee.css";

export const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEmployees(data.data);
      });
  }, []);

  const handleDeleteEmployee = (id) => () => {
    const newEmployees = employees.filter((employee) => employee.id !== id);

    setEmployees(newEmployees);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const getMaxId = (items) => {
    return items.reduce((acc, item) => (acc.id > item.id ? acc : item), 0).id;
  };

  const handleAddEmployee = () => {
    setEmployees((prevState) => {
      let maxId = prevState.length && getMaxId(prevState);
      const id = maxId + 1 || 1;

      return [{ id, first_name: inputValue }, ...prevState];
    });

    setInputValue("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Новый сотрудник"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleAddEmployee} disabled={!inputValue.trim()}>
          Добавить
        </button>
      </div>
      {employees.map(({ first_name, id }) => {
        return (
          <div key={id} className="employee-card">
            <p>{first_name}</p>
            <button onClick={handleDeleteEmployee(id)}>Удалить</button>
          </div>
        );
      })}
    </div>
  );
};
