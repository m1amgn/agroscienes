import React, { useState, useEffect } from "react";
import TableElements from "./TableElements";
import BarChart from "./BarElements";
import { Button } from "react-bootstrap";

function ElementsForm() {
  const API_URL = "http://localhost:8000/api/calcfertapi/";

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
              ? (key = "Среднее количество осадков за сезон, мм")
              : key && key === "temperature"
              ? (key = "Средняя температура вегетации, С")
              : key && key === "productivity"
              ? (key = "Планируемая урожайность, ц/га")
              : key && key === key
              ? (key = "Содержание " + key + " мг/кг почвы")
              : key}
          </label>
          <input
            key={key}
            type="number"
            min="0.001"
            max="10000"
            step="0.001"
            name={
              key === "Среднее количество осадков за сезон, мм"
                ? (key = "quantity_of_water")
                : key && key === "Средняя температура вегетации, С"
                ? (key = "temperature")
                : key && key === "Планируемая урожайность, ц/га"
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
      window.alert("Необходимо, чтобы все поля были заполнены и выбраны!");
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
        <h3>Калькулятор удобрений</h3>
        <p>
          Алгоритмы расчёта базируются на методических рекомендациях по внесению
          элементов питания с учетом коэффециентов использования питательных
          элементов из почвы и удобрений, а также на результатах опытных
          исследований Российских и зарубежных агрохимических университетов.
        </p>
        <p>
          Фундаментельной задачей, решаемой данным расчётом, является Закон
          ограничивающего (лимитирующего) фактора или Закон минимума Либиха -
          это один из фундаментальных законов в биологии, гласящий, что наиболее
          значим для организма тот фактор, который более всего отклоняется от
          оптимального его значения. Иными словами, продуктивность культурных
          растений, в первую очередь, зависит от того питательного вещества
          (минерального элемента), который представлен в почве наиболее слабо
          относительно его оптимальной концентрации.
        </p>
      </div>
      <div className="graph-container" id="chart">
        <BarChart serverData={serverData} />
      </div>
      <div className="table-container">
        <TableElements serverData={serverData} />
      </div>
      <form onSubmit={submitHandler}>
        <div className="form-container">
          <div className="select-container">
            <label key="chooseCulture">Выберите культуру:</label>
            <select onChange={cultureChangeHandler}>
              <option value="">-------</option>
              {getCulturesList}
            </select>
            <label key="chooseClimateZone">Выберите климатическую зону:</label>
            <select onChange={climateZoneChangeHandler}>
              <option value="">-------</option>
              {getClimateZoneList}
            </select>
            <div className="button-container">
              <Button variant="dark" size="sm" type="submit">
                Рассчитать
              </Button>
            </div>
          </div>
          <div className="elements-form">
            <label>
              Введите данные или воспользуйтесь средними значениями по
              умолчанию:
            </label>
            {getUserForm(userForm)}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ElementsForm;
