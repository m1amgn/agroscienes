import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TankRecipe from "./TankRecipe";
import FieldRecipe from "./FieldRecipe";
import CostsOnField from "./CostsOnField";
import CostsOnHa from "./CostsOnHa";
import TestSolution from "./TestSolution";
import InfoPanel from "./InfoPanel";

import pictureHardness from "../hardness.jpeg";
import picturepH from "../pH.jpg";
import "./TankForm.css";

function TankForm() {
  const API_URL = "http://localhost:8000/api/calctankapi/";
  const postDataForm = {
    quantity_of_ha: "",
    volume_of_water_tank: "",
    volume_of_mixer_tank: "",
    quantity_of_mixture: "",
    current_hardness: "",
    planing_hardness: "",
    decrease_pH: "",
    pesticide_1: "",
    form_pesticide_1: "",
    consumption_pesticide_1: "",
    price_pesticide_1: "",
    pesticide_2: "",
    form_pesticide_2: "",
    consumption_pesticide_2: "",
    price_pesticide_2: "",
    pesticide_3: "",
    form_pesticide_3: "",
    consumption_pesticide_3: "",
    price_pesticide_3: "",
    sas: "",
    consumption_sas: "",
    price_sas: "",
    complex_fertilizer: "",
    consumption_complex_fertilizer: "",
    price_complex_fertilizer: "",
  };

  // const [dataToForm, setDataToForm] = useState("");
  const [postData, setPostData] = useState(postDataForm);
  const [serverData, setServerData] = useState("");

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then(setDataToForm);
  // }, []);

  // if something went wrong at first check user_form from api
  // console.log(dataToForm);
  // don't forget turn on check-field in api

  const inputFieldHandler = (event) => {
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
    <div className="tank-form-container">
      <div className="tank-form-description">
        <h3>Калькулятор баковых смесей</h3>
        <p>
          Главной проблемой создания многокомпонентных баковых смесей является
          химическая несовместимость ХСЗР в баковой смеси, а также использование
          воды для ХСЗР растворения ненадлежащего качества. Так, например,
          использование смеси фосфорорганических пестицидов в жесткой воде с
          высокой гидратной щелочностью (pH более 8.2) однозначно приведет к
          появлению осадка в баковой смеси. В большинстве случаев
          несовместимость препаратов и используемой воды, как правило,
          выявляется уже после создания баковой смеси, когда что-то исправить
          достаточно трудно.
        </p>
        <p>
          В связи с этим предлагается использовать специально разработанный
          калькулятор, испольуемый для создания моделей баковых смесей. В случае
          использования воды ненадлежащего для растворения качества предлагается
          использовать стабилизаторы марки "РТ RO" (Ж- и pH-) для подготовки
          этой воды с целью недопущения образования осадка. Применение
          стабилизаторов позволяет использовать для разведения ХСЗР обычную
          артезианскую или поверхностную воду без необходимости её подготовки на
          установках умягчения или обратном осмосе. Для снижения жесткости воды
          достаточно добавить необходимое количество стабилизаторов в
          обрабатываемую воду и тщательно перемешать.
        </p>
        <InfoPanel title="Определение жесткости">
          Для определения жесткости тестируемой воды потребуется капельный тест
          для анализа воды на показатель общей жесткости (gH). Проведение
          анализа: 1. Прополоскать мерный стакан тестируемой водой. 2. Налить 5
          мл тестируемой воды. 3. Добавить 5 мл дистиллированной воды и
          взболтать. 4. Отлить 5 мл воды из мерного стакана. 5. Добавлять
          индикатор в мерный стакан по каплям, перемешивая содержимое круговыми
          движениями, до тех пор, пока цвет раствора не изменится от
          светло-розового через тёмно-розовый или красный к зелёному. Переход
          происходит быстро, от одной капли. 6. Число капель необходимо умножить
          на 0,712, полученое значение будет жесткостью тестируемой воды, его
          необходимо ввести в форму. Для определения требуемой жесткости изучите
          таблицы ниже.
          <img className="d-block w-10" src={pictureHardness} alt="Hardness" />
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
          *Рекомендуется использовать воду с жесткостью не более 7,5 мг-экв/л.
        </InfoPanel>
        <InfoPanel title="Определение единиц снижения pH">
          <p>
            Кислотность воды или рН. Этот показатель характеризуется мерой
            активности ионов водорода. Основной диапозон значений pH находится
            от 1 до 14. Растворы с рН = 1 очень кислые, c ph = 14 очень
            щелочные; значение pH 7 соответствует нейтральной реакции. В полевых
            условиях уровень рН можно измерить прибором рН-метр или
            тест-полосками. Каждый препарат имеет свой оптимальный уровень рН
            для приготовления рабочего раствора.
          </p>
          <p>
            Пестициды, чувствительные к щелочному гидролизу — те, которые быстро
            распадаются при рН большем 7, например: производные 2,4Д, глифосат,
            аммонийная соль имазетапира, некоторые пиретроиды, хлороталонил
            (Браво, КС, Миксанил), ФОС-инсектициды и карбаматы (Ланнат, СП,
            Метомакс, КС, Талант, СК).
          </p>
          <p>
            В случае, если рН воды, которую вы используете для приготовления
            рабочего раствора, больше 7, используйте специальные препараты для
            корректировки pH-. Вода со значением рН 3,5–6,0 приемлемая для
            приготовления и кратковременного (12–24 часа) хранения некоторых
            рабочих растворов. Используя воду со значением рН 6,1–7,0 следует
            сразу применять приготовленную рабочую жидкость. Не храните более
            1–2 часов, так как впоследствии эффективность препарата значительно
            снижается. Для воды со значением рН 7,0 и выше обязательно
            необходимо использовать корректор pH-.
          </p>
          <p>
            Пестициды, чувствительные к кислотному гидролизу — те, которые
            быстро распадаются при рН меньшем 7. Представителем данной группы
            являются сульфонилмочевины (сульфуроны, трибенурон). Если рН
            рабочего раствора меньше 7, следует или использовать специальные
            корректоры pH+, либо как можно скорее вносить препарат, пока в
            результате гидролиза действующее вещество не разрушилось.
          </p>
          <p>
            Таким образом, наиболее оптимальное значение рН для приготовления
            рабочего раствора – pH = 5-7.
          </p>
          <p>
            Для определения pH тестируемой воды потребуются корректор (pH-) PT
            RO 203 и индикаторные тесты pH. Проведение анализа: Налить в емкость
            200 мл тестируемой воды, вносить по 0,05 мл инсулиновым шприцом
            корректор (pH-) РТ RO 203, перемешивая раствор, до изменения цвета
            лакмусовой полоски до нужного оттенка указанного в наборе данных
            тестов. Ввести количество в единицах (1 ед. - 0,1 мл корректора).
          </p>
          <img className="d-block w-3" src={picturepH} alt="pH" />
          *Среднее значение единиц корректора для снижения pH - 1,5.
        </InfoPanel>
      </div>

      <form onSubmit={submitHandler}>
        <div className="tank-form">
          <h5>Обязательные поля для заполнения:</h5>
          <div>
            <label>Количество гектар, Га</label>
            <input
              type="number"
              key="quantity_of_ha"
              min="0.1"
              max="10000"
              step="0.1"
              name="quantity_of_ha"
              required
              onChange={inputFieldHandler}
            />
            <label>Объем бака для воды, м3</label>
            <input
              type="number"
              key="volume_of_water_tank"
              min="0.1"
              max="1000"
              step="0.1"
              name="volume_of_water_tank"
              required
              onChange={inputFieldHandler}
            />
          </div>
          <div>
            <label>Объем бака распылителя/растворного узла, м3</label>
            <input
              type="number"
              key="volume_of_mixer_tank"
              min="0.1"
              max="1000"
              step="0.1"
              name="volume_of_mixer_tank"
              required
              onChange={inputFieldHandler}
            />
            <label>Объем внесения рабочего раствора, л/га</label>
            <input
              type="number"
              key="quantity_of_mixture"
              min="0.1"
              max="1000"
              step="0.1"
              name="quantity_of_mixture"
              required
              onChange={inputFieldHandler}
            />
          </div>
          <div>
            <label>Жесткость используемой воды, Ж</label>
            <input
              type="number"
              key="current_hardness"
              min="0.01"
              max="30"
              step="0.01"
              name="current_hardness"
              required
              onChange={inputFieldHandler}
            />
            <label>Целевая жесткость, Ж</label>
            <input
              type="number"
              key="planing_hardness"
              min="0.01"
              max="30"
              step="0.01"
              name="planing_hardness"
              required
              onChange={inputFieldHandler}
            />
          </div>

          <div>
            <label>Единицы снижения pH</label>
            <input
              type="number"
              key="decrease_pH"
              min="0.01"
              max="12"
              step="0.01"
              name="decrease_pH"
              required
              onChange={inputFieldHandler}
            />
          </div>

          <h5>Заполните поля при необходимости:</h5>
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
            <label>Расход л(кг)/га</label>
            <input
              type="number"
              key="consumption_pesticide_1"
              min="0.001"
              max="20"
              step="0.001"
              name="consumption_pesticide_1"
              onChange={inputFieldHandler}
            />
            <label>Цена СЗР</label>
            <input
              type="number"
              key="price_pesticide_1"
              min="0.1"
              max="10000"
              step="0.1"
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
            <label>Расход л(кг)/га</label>
            <input
              type="number"
              key="consumption_pesticide_2"
              min="0.001"
              max="20"
              step="0.001"
              name="consumption_pesticide_2"
              onChange={inputFieldHandler}
            />
            <label>Цена СЗР</label>
            <input
              type="number"
              key="price_pesticide_2"
              min="0.1"
              max="10000"
              step="0.1"
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
            <label>Расход л(кг)/га</label>
            <input
              type="number"
              key="consumption_pesticide_3"
              min="0.001"
              max="20"
              step="0.001"
              name="consumption_pesticide_3"
              onChange={inputFieldHandler}
            />
            <label>Цена СЗР</label>
            <input
              type="number"
              key="price_pesticide_3"
              min="0.1"
              max="10000"
              step="0.1"
              name="price_pesticide_3"
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
            <label>Норма внесения мл/л рабочего раствора</label>
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
              min="0.1"
              max="10000"
              step="0.1"
              name="price_sas"
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
              min="0.1"
              max="1000"
              step="0.1"
              name="consumption_complex_fertilizer"
              onChange={inputFieldHandler}
            />
            <label>Цена МКУ</label>
            <input
              type="number"
              key="price_complex_fertilizer"
              min="0.1"
              max="1000"
              step="0.1"
              name="price_complex_fertilizer"
              onChange={inputFieldHandler}
            />
          </div>

          <div className="button-container">
            <Button variant="dark" size="sm" type="submit">
              Рассчитать
            </Button>
          </div>
        </div>
      </form>
      <div className="result-container">
        <div>
          <TankRecipe serverData={serverData} />
        </div>
        <div>
          <FieldRecipe serverData={serverData} />
        </div>
        <div>
          <CostsOnField serverData={serverData} />
        </div>
        <div>
          <CostsOnHa serverData={serverData} />
        </div>
        <div>
          <TestSolution serverData={serverData} />
        </div>
      </div>
    </div>
  );
}

export default TankForm;
