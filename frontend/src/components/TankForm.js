import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

import pictureHardness from "../hardness.jpeg";
import picturepH from "../pH.jpg";

function TankForm() {
  const API_URL = "http://localhost:8000/api/calctanktapi/";

  const [dataToForm, setDataToForm] = useState("");
  const [postData, setPostData] = useState("");
  const [serverData, setServerData] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setDataToForm);
  }, []);

  // if something went wrong at first check user_form from api
  // console.log(dataToForm);

  if (!dataToForm) return null;
  const userForm = dataToForm["user_form"][0];

  const inputFieldHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(postData);
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
    <div>
      <form onSubmit={submitHandler}>
        <h3>Калькулятор баковых смесей</h3>
        <p>
          Пожалуйста заполните поля ():
        </p>
        <div>
          <label>Количество гектар, Га</label>
          <input
            type="number"
            key="quantity_of_ha"
            min="0.001"
            max="1000"
            step="0.001"
            name="quantity_of_ha"
            onChange={inputFieldHandler}
          />
          <label>Объем бака для воды, м3</label>
          <input
            type="number"
            key="volume_of_water_tank"
            min="0.001"
            max="1000"
            step="0.001"
            name="volume_of_water_tank"
            onChange={inputFieldHandler}
          />
        </div>
        <div>
          <label>Объем бака распылителя, м3</label>
          <input
            type="number"
            key="volume_of_mixer_tank"
            min="0.001"
            max="1000"
            step="0.001"
            name="volume_of_mixer_tank"
            onChange={inputFieldHandler}
          />
          <label>Объем внесения рабочего раствора, л/га</label>
          <input
            type="number"
            key="quantity_of_mixture"
            min="0.001"
            max="1000"
            step="0.001"
            name="quantity_of_mixture"
            onChange={inputFieldHandler}
          />
        </div>
        <div>
          <label>Жесткость тестируемой воды, Ж*</label>
          <input
            type="number"
            key="current_hardness"
            min="0.001"
            max="1000"
            step="0.001"
            name="current_hardness"
            onChange={inputFieldHandler}
          />
          <label>Целевая жесткость, Ж</label>
          <input
            type="number"
            key="planing_hardness"
            min="0.001"
            max="1000"
            step="0.001"
            name="planing_hardness"
            onChange={inputFieldHandler}
          />
        </div>
        <div>
          <label>pH тестируемой воды**</label>
          <input
            type="number"
            key="current_pH"
            min="0.001"
            max="1000"
            step="0.001"
            name="current_pH"
            onChange={inputFieldHandler}
          />
          <label>Целевой pH</label>
          <input
            type="number"
            key="planing_pH"
            min="0.001"
            max="1000"
            step="0.001"
            name="planing_pH"
            onChange={inputFieldHandler}
          />
        </div>
        <div>
          <label>Введите название пестицида</label>
          <input
            type="text"
            key="pesticide_1"
            name="pesticide_1"
            onChange={inputFieldHandler}
          />
          <label>Препаративная форма</label>
          <input
            type="text"
            key="form_pesticide_1"
            name="form_pesticide_1"
            onChange={inputFieldHandler}
          />
          <label>Расход л/га</label>
          <input
            type="number"
            key="consumption_pesticide_1"
            min="0.001"
            max="1000"
            step="0.001"
            name="consumption_pesticide_1"
            onChange={inputFieldHandler}
          />
          <label>Цена СЗР</label>
          <input
            type="number"
            key="price_pesticide_1"
            min="0.001"
            max="1000"
            step="0.001"
            name="price_pesticide_1"
            onChange={inputFieldHandler}
          />
        </div>
        <div>
          <label>Введите название пестицида</label>
          <input
            type="text"
            key="pesticide_2"
            name="pesticide_2"
            onChange={inputFieldHandler}
          />
          <label>Препаративная форма</label>
          <input
            type="text"
            key="form_pesticide_2"
            name="form_pesticide_2"
            onChange={inputFieldHandler}
          />
          <label>Расход л/га</label>
          <input
            type="number"
            key="consumption_pesticide_2"
            min="0.001"
            max="1000"
            step="0.001"
            name="consumption_pesticide_2"
            onChange={inputFieldHandler}
          />
          <label>Цена СЗР</label>
          <input
            type="number"
            key="price_pesticide_2"
            min="0.001"
            max="1000"
            step="0.001"
            name="price_pesticide_2"
            onChange={inputFieldHandler}
          />
        </div>
        <div>
          <label>Введите название пестицида</label>
          <input
            type="text"
            key="pesticide_3"
            name="pesticide_3"
            onChange={inputFieldHandler}
          />
          <label>Препаративная форма</label>
          <input
            type="text"
            key="form_pesticide_3"
            name="form_pesticide_3"
            onChange={inputFieldHandler}
          />
          <label>Расход л/га</label>
          <input
            type="number"
            key="consumption_pesticide_3"
            min="0.001"
            max="1000"
            step="0.001"
            name="consumption_pesticide_3"
            onChange={inputFieldHandler}
          />
          <label>Цена СЗР</label>
          <input
            type="number"
            key="price_pesticide_3"
            min="0.001"
            max="1000"
            step="0.001"
            name="price_pesticide_3"
            onChange={inputFieldHandler}
          />
        </div>
        <div>
          <label>Введите название МКУ</label>
          <input
            type="text"
            key="complex_fertilizer"
            name="complex_fertilizer"
            onChange={inputFieldHandler}
          />
          <label>Расход л/га</label>
          <input
            type="number"
            key="consumption_complex_fertilizer"
            min="0.001"
            max="1000"
            step="0.001"
            name="consumption_complex_fertilizer"
            onChange={inputFieldHandler}
          />
          <label>Цена МКУ</label>
          <input
            type="number"
            key="price_complex_fertilizer"
            min="0.001"
            max="1000"
            step="0.001"
            name="price_complex_fertilizer"
            onChange={inputFieldHandler}
          />
        </div>
        <div>
          <label>Введите название ПАВ</label>
          <input
            type="text"
            key="sas"
            name="sas"
            onChange={inputFieldHandler}
          />
          <label>Расход л/га</label>
          <input
            type="number"
            key="consumption_sas"
            min="0.001"
            max="1000"
            step="0.001"
            name="consumption_sas"
            onChange={inputFieldHandler}
          />
          <label>Цена ПАВ</label>
          <input
            type="number"
            key="price_sas"
            min="0.001"
            max="1000"
            step="0.001"
            name="price_sas"
            onChange={inputFieldHandler}
          />
        </div>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Определение жесткости*</Accordion.Header>
            <Accordion.Body>
              Для определения жесткости тестируемой воды нам потребуется
              капельный тест для анализа воды на показатель общей жесткости
              (gH). Проведение анализа: 1. Прополоскать мерный стаканчик
              тестируемой водой. 2. Налить 5 мл. тестируемой воды. 3. Добавить 5
              мл. дистиллированной воды и взболтать. 4. Отлить 5 мл. воды из
              мерного стаканчика. 5. Добавлять индикатор в мерный стаканчик по
              каплям, перемешивая содержимое круговыми движениями, до тех пор,
              пока цвет раствора не изменится от светло-розового через
              тёмно-розовый или красный к зелёному. Переход происходит быстро,
              от одной капли. 6. Внесите число капель индикатора ниже. Для
              определения требуемой жесткости изучите таблицы ниже.
              <img
                className="d-block w-10"
                src={pictureHardness}
                alt="Hardness"
              />
              <Table bordered hover size="sm">
                <thead>
                  <tr>
                    <td>Вода</td>
                    <td>Жесткость, мг-экв/л</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Очень мягкая вода</td>
                    <td>до 1,5</td>
                  </tr>
                  <tr>
                    <td>Мягкая вода</td>
                    <td>от 1,5 до 4</td>
                  </tr>
                  <tr>
                    <td>Вода средней жесткости</td>
                    <td>от 4 до 8</td>
                  </tr>
                  <tr>
                    <td>Жесткая вода</td>
                    <td>от 8 до 12</td>
                  </tr>
                  <tr>
                    <td>Очень жесткая вода</td>
                    <td>более 12</td>
                  </tr>
                </tbody>
              </Table>
              *Рекомендуется использовать воду с жесткостью не более 7,5
              мг-экв/л.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Определение pH**</Accordion.Header>
            <Accordion.Body>
              Для определения pH тестируемой воды нам потребуются индикаторные
              полоски pH. Проведение анализа: Налить в емкость 200 мл
              тестируемой воды, вносить по 0,05 мл. инсулиновым шприцом Ph
              корректор (RO 203),перемешивая раствор, до изменения цвета
              лакмусовой полоски до нужного оттенка указанного в наборе данных
              полосок. Ввести кол-во ед. (1 ед. 0,1 мл)
              <img className="d-block w-3" src={picturepH} alt="pH" />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="button-container">
          <Button variant="dark" size="sm" type="submit">
            Рассчитать
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TankForm;
