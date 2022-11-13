// chart.js, recharts, nivo (есть песочница), vx (простой) 
import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:8000/api/calcfertapi/";

  const [dataToForm, setDataToForm] = useState(null);
  const [postData, setPostData] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setDataToForm);
  }, []);

  if (!dataToForm) return null;

  const cultureList = dataToForm["culture"];
  const climateZoneList = dataToForm["climate_zone"];
  const UserForm = dataToForm["user_form"][0];

  const getCulturesList = cultureList.map((cultures) => (
    <option key={cultures.id} value={cultures["culture"]}>
      {cultures["culture"]}
    </option>
  ));

  const getClimateZoneList = climateZoneList.map((climateZones) => (
    <option key={climateZones.id} value={climateZones["climate_zone"]}>
      {climateZones["climate_zone"]}
    </option>
  ));

  const getUserForm = (UserForm) => {
    let content = [];
    for (let element of Object.keys(UserForm)) {
      content.push(
        <div>
          <label>
            {element === "quantity_of_water"
              ? (element = "Количество осадков")
              : element && element === "temperature"
              ? (element = "Температура")
              : element && element === "productivity"
              ? (element = "Урожайность")
              : element}
          </label>
          <input
            key={element}
            type="number"
            name={
              element === "Количество осадков"
                ? (element = "quantity_of_water")
                : element && element === "Температура"
                ? (element = "temperature")
                : element && element === "Урожайность"
                ? (element = "productivity")
                : element
            }
            onChange={inputElementsHandler}
          />
        </div>
      );
    }
    return content;
  };

  const cultureChangeHandler = (event) => {
    setPostData((previousState) => {
      return {
        ...previousState,
        culture: event.target.value,
      };
    });
  };

  const climateZoneChangeHandler = (event) => {
    setPostData((previousState) => {
      return {
        ...previousState,
        climate_zone: event.target.value,
      };
    });
  };

  const inputElementsHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setPostData((previousState) => {
      return {
        ...previousState,
        [name]: value,
      };
    });
  };

  async function postForm(url = API_URL, data = postData) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    postForm(API_URL, postData);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Выберите культуру
            <select onChange={cultureChangeHandler}>
              <option value="">-------</option>
              {getCulturesList}
            </select>
          </label>
        </div>
        <div>
          <label>
            Выберите климатическую зону
            <select onChange={climateZoneChangeHandler}>
              <option value="">-------</option>
              {getClimateZoneList}
            </select>
          </label>
        </div>
        <div>
          <label>Введите данные</label>
          {getUserForm(UserForm)}
        </div>
        <div>
          <button type="submit">Рассчитать</button>
        </div>
      </form>
    </div>
  );
}

export default App;
