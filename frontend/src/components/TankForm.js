import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

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

  const getUserForm = (userForm) => {
    let content = [];
    for (let [key, value] of Object.entries(userForm)) {
      content.push(
        <div>
          <label>
            {key === "quantity_of_ha"
              ? (key = "Введите количество гектар, Га")
              : key && key === "volume_of_water_tank"
              ? (key = "Введите объем бака для воды, м3")
              : key && key === "volume_of_mixer_tank"
              ? (key = "Введите объем бака распылителя/растворного узла, м3")
              : key && key === "quantity_of_mixture"
              ? (key = "Введите объем внесения рабочего раствора, л/га")
              : key && key === "current_hardness"
              ? (key = "Введите жесткость тестируемой воды, Ж")
              : key && key === "planing_hardness"
              ? (key = "Целевая жесткость, Ж")
              : key && key === "current_pH"
              ? (key = "Введите pH")
              : key && key === "pesticide_1"
              ? (key = "Введите название пестицида")
              : key && key === "form_pesticide_1"
              ? (key = "Препаративная форма")
              : key && key === "consumption_pesticide_1"
              ? (key = "Расход л/га")
              : key && key === "price_pesticide_1"
              ? (key = "Цена СЗР")
              : key && key === "pesticide_2"
              ? (key = "Введите название пестицида")
              : key && key === "form_pesticide_2"
              ? (key = "Препаративная форма")
              : key && key === "consumption_pesticide_2"
              ? (key = "Расход л/га")
              : key && key === "price_pesticide_2"
              ? (key = "Цена СЗР")
              : key && key === "pesticide_3"
              ? (key = "Введите название пестицида")
              : key && key === "form_pesticide_3"
              ? (key = "Препаративная форма")
              : key && key === "consumption_pesticide_3"
              ? (key = "Расход л/га")
              : key && key === "price_pesticide_3"
              ? (key = "Цена СЗР")
              : key && key === "complex_fertilizer"
              ? (key = "Введите название МКУ")
              : key && key === "consumption_complex_fertilizer"
              ? (key = "Расход л/га")
              : key && key === "price_complex_fertilizer"
              ? (key = "Цена МКУ")
              : key && key === "sas"
              ? (key = "Введите название ПАВ")
              : key && key === "consumption_sas"
              ? (key = "Расход л/га")
              : key && key === "price_sas"
              ? (key = "Цена ПАВ")
              : key}
          </label>
          <input
            type={
              key === "Введите название пестицида"
                ? "text"
                : key && key === "Препаративная форма"
                ? "text"
                : key && key === "Введите название ПАВ"
                ? "text"
                : key && key === "Введите название ПАВ"
                ? "text"
                : "number"
            }
            min="0.001"
            max="1000"
            step="0.001"
            name={
              key === "Введите количество гектар, Га"
                ? (key = "quantity_of_ha")
                : key && key === "Введите объем бака для воды, м3"
                ? (key = "volume_of_water_tank")
                : key && key === "Введите объем бака распылителя/растворного узла, м3"
                ? (key = "volume_of_mixer_tank")
                : key &&
                  key === "Введите объем внесения рабочего раствора, л/га"
                ? (key = "quantity_of_mixture")
                : key && key === "Введите жесткость тестируемой воды, Ж"
                ? (key = "current_hardness")
                : key && key === "Целевая жесткость, Ж"
                ? (key = "planing_hardness")
                : key && key === "Введите pH"
                ? (key = "current_pH")
                : key && key === "Введите название пестицида"
                ? (key = "pesticide_1")
                : key && key === "Препаративная форма"
                ? (key = "form_pesticide_1")
                : key && key === "Расход л/га"
                ? (key = "consumption_pesticide_1")
                : key && key === "Цена СЗР"
                ? (key = "price_pesticide_1")
                : key && key === "Введите название пестицида"
                ? (key = "pesticide_2")
                : key && key === "Препаративная форма"
                ? (key = "form_pesticide_2")
                : key && key === "Расход л/га"
                ? (key = "consumption_pesticide_2")
                : key && key === "Цена СЗР"
                ? (key = "price_pesticide_2")
                : key && key === "Введите название пестицида"
                ? (key = "pesticide_3")
                : key && key === "Препаративная форма"
                ? (key = "form_pesticide_3")
                : key && key === "Расход л/га"
                ? (key = "consumption_pesticide_3")
                : key && key === "Цена СЗР"
                ? (key = "price_pesticide_3")
                : key && key === "Введите название МКУ"
                ? (key = "complex_fertilizer")
                : key && key === "Расход л/га"
                ? (key = "consumption_complex_fertilizer")
                : key && key === "Цена МКУ"
                ? (key = "price_complex_fertilizer")
                : key && key === "Введите название ПАВ"
                ? (key = "sas")
                : key && key === "Расход л/га"
                ? (key = "consumption_sas")
                : key && key === "Цена ПАВ"
                ? (key = "price_sas")
                : key
            }
            key={key}
            onChange={inputElementsHandler}
          />
        </div>
      );
    }
    return content;
  };

  const inputElementsHandler = (event) => {
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
        <div className="tank-form">
          <label>
            Введите данные или воспользуйтесь средними значениями по умолчанию:
          </label>
          {getUserForm(userForm)}
        </div>
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
