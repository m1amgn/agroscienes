import React, { useState, useEffect } from "react";
import TableElements from "./TableElements";

function ElementsForm() {
  const API_URL = "http://localhost:8000/api/calcfertapi/";

  const [dataToForm, setDataToForm] = useState("");
  const [postData, setPostData] = useState({});
  const [serverData, setServerData] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setDataToForm);
  }, []);

  if (!dataToForm) return null;

  const cultureList = dataToForm["culture"];
  const climateZoneList = dataToForm["climate_zone"];
  const userForm = dataToForm["user_form"][0];

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

  const getUserForm = (userForm) => {
    let content = [];
    for (let [key, value] of Object.entries(userForm)) {
      content.push(
        <div>
          <label>
            {key === "quantity_of_water"
              ? (key = "Количество осадков")
              : key && key === "temperature"
              ? (key = "Температура")
              : key && key === "productivity"
              ? (key = "Урожайность")
              : key}
          </label>
          <input
            key={key}
            type="number"
            name={
              key === "Количество осадков"
                ? (key = "quantity_of_water")
                : key && key === "Температура"
                ? (key = "temperature")
                : key && key === "Урожайность"
                ? (key = "productivity")
                : key
            }
            defaultValue={value}
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

  const submitHandler = (event) => {
    event.preventDefault();
    if (postData) {
      let formDataKeys = Object.keys(userForm);
      let postDataKeys = Object.keys(postData);
      let keysArray = [];
      for (let key of formDataKeys) {
        if (!postDataKeys.includes(key)) {
          keysArray.push(key);
        }
      }
      for (let key of keysArray) {
        const value = userForm[key];
        const name = key;
        setPostData((previousState) => {
          return {
            ...previousState,
            [name]: value,
          };
        });
      }
      postForm(API_URL, postData);
      console.log(serverData);
    } else {
      window.alert("Hello world!");
    }
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
        setServerData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

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
          {getUserForm(userForm)}
        </div>
        <div>
          <button type="submit">Рассчитать</button>
        </div>
      </form>
      {/* <TableElements props={serverData}/> */}
    </div>
  );
}

export default ElementsForm;
