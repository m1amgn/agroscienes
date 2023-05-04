import React, { useState, useEffect } from "react";
import TableElements from "./TableElements";
import BarChart from "./BarElements";
import { Button } from "react-bootstrap";
import "./ElementsForm.css";

function ElementsForm() {
  const API_URL = "http://127.0.0.1:8000/api/calcfertapi/";

  const [dataToForm, setDataToForm] = useState("");
  const [postData, setPostData] = useState("");
  const [serverData, setServerData] = useState("");

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
    <option key={cultures["culture"]} value={cultures["culture"]}>
      {cultures["culture"]}
    </option>
  ));

  const getClimateZoneList = climateZoneList.map((climateZones) => (
    <option
      key={climateZones["climate_zone"]}
      value={climateZones["climate_zone"]}
    >
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
              ? (key = "Average precipitation amount per season, mm")
              : key && key === "temperature"
              ? (key = "Average temperature per season, С")
              : key && key === "productivity"
              ? (key = "Planned yield, centner/ha")
              : key && key === key
              ? (key = "Soil " + key + " content, mg/kg")
              : key}
          </label>
          <input
            key={key}
            type="number"
            min="0.001"
            max="10000"
            step="0.001"
            name={
              key === "Average precipitation amount per season, mm"
                ? (key = "quantity_of_water")
                : key && key === "Average temperature per season, С"
                ? (key = "temperature")
                : key && key === "Planned yield, centner/ha"
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
        ...userForm,
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
      postForm(API_URL, postData);
    } else {
      window.alert("All fields must be filled out and selected!");
    }
  };

  function postForm(url = API_URL, data = postData) {
    const response = fetch(url, {
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
    <div className="elements-form-container">
      <div className="elements-form-description">
        <h3>Nutrient calculator</h3>
        <p>
          The calculation algorithms are based on methodological recommendations
          for the application of nutrients, taking into account the coefficients
          of nutrient uptake from soil and fertilizers, as well as the results
          of experimental research.
        </p>
        <p>
          The fundamental task solved by this calculation is the Law of Limiting
          Factors or Liebig's Law of the Minimum - one of the fundamental laws
          in biology that states that the most significant factor for an
          organism is the one that deviates the most from its optimal value. In
          other words, the productivity of cultivated plants depends primarily
          on the nutrient (mineral element) that is most deficient in the soil
          relative to its optimal concentration.
        </p>
      </div>
      <div className="graph-container" id="chart">
        <BarChart serverData={serverData} />
      </div>
      <div className="table-container">
        <TableElements serverData={serverData} />
      </div>
      <form onSubmit={submitHandler}>
        <div className="elements-select-form">
          <div className="select-container">
            <label key="chooseCulture">Select a crop:</label>
            <select onChange={cultureChangeHandler}>
              <option value="">-------</option>
              {getCulturesList}
            </select>
            <label key="chooseClimateZone">Select a climatic zone:</label>
            <select onChange={climateZoneChangeHandler}>
              <option value="">-------</option>
              {getClimateZoneList}
            </select>
            <div className="button-container">
              <Button variant="dark" size="sm" type="submit">
                Calculate
              </Button>
            </div>
          </div>
          <div className="elements-form">
            <label>Enter data or use default average values:</label>
            {getUserForm(userForm)}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ElementsForm;
