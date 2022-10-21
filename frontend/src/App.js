import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  // const postData = {
  //   culture: "Жопа",
  // };

  const API_URL = "http://localhost:8000/api/calcfertapi/";

  // const getData = () => {
  //   const url = `${API_URL}/api/calcfertapi/`;
  //   return axios.get(url).then((response) => response.data);
  // };
  const [dataToForm, setDataToForm] = useState(null);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setDataToForm);
  }, []);

  if (!dataToForm) return null;

  const cultureList = dataToForm["culture"];
  const climateZoneList = dataToForm["climate_zone"];
  const defaultElements = dataToForm["default_concentrations"][0];
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
  const getDefaultElements = (defaultElements) => {
    let content = [];
    for (let element of Object.keys(defaultElements)) {
      content.push(
        <div>
          <label>
            {element}
            <input key={element} type="number" name={element} />
          </label>
        </div>
      );
    }
    return content;
  };

  // const postSendData = (postData) => {
  //   axios({
  //     method: 'post',
  //     url: `${API_URL}/api/calcfertapi/`,
  //     data: postData
  //   })};

  return (
    <div>
      <form>
        <div>
          <label>
            Выберите культуру
            <select>{getCulturesList}</select>
          </label>
        </div>
        <div>
          <label>
            Выберите климатическую зону
            <select>{getClimateZoneList}</select>
          </label>
        </div>
        <div>
          <label>Введите концентрацию элементов</label>
          {getDefaultElements(defaultElements)}
        </div>
      </form>
    </div>
  );
}

export default App;
