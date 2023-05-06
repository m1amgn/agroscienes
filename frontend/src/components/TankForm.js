import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TankRecipe from "./TankRecipe";
import FieldRecipe from "./FieldRecipe";
import CostsOnField from "./CostsOnField";
import CostsOnHa from "./CostsOnHa";
import TestSolution from "./TestSolution";
import InfoPanel from "./InfoPanel";
import "./TankForm.css";

function TankForm() {
  const API_URL = "http://127.0.0.1:8000/api/calctankapi/";
  // deploy: https://domen.com/api/calctankapi/

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
    <div className="tank-form-container">
      <div className="tank-form-description">
        <h3>Tankmix calculator</h3>
        <p>
          The main problem in creating multi-component tank mixes is the
          chemical incompatibility of pesticides in the tank mix, as well as the
          use of poor-quality water to dissolve pesticides. For example, the use
          of a mixture of organophosphorus pesticides in hard water with high
          hydrate alkalinity (pH over 8.2) will inevitably lead to precipitation
          in the tank mix. In most cases, the incompatibility of pesticides and
          water used is usually identified only after the tank mix is created,
          making it difficult to correct.
        </p>
        <p>
          In this regard, it is proposed to use a specially designed calculator
          for creating models of tank mixtures. In case of using water of
          improper quality for dissolving, it is suggested to use stabilizers of
          the "Hardness-" and "pH-" to prepare this water in order to prevent
          the formation of sediment. The use of stabilizers allows using
          ordinary artesian or surface water for diluting pesticides without the
          need for its preparation on softening or reverse osmosis units. To
          reduce water hardness, it is enough to add the required amount of
          stabilizers to the processed water and mix thoroughly.
        </p>
        <InfoPanel title="Determination of water hardness">
          Determination of water hardness will require a drop test for the
          analysis of total hardness (gH). Test procedure: 1. Rinse the
          measuring cup with the water being tested. 2. Pour 5 ml of the water
          being tested. 3. Add 5 ml of distilled water and shake. 4. Pour 5 ml
          of the water from the measuring cup. 5. Add indicator to the measuring
          cup dropwise, stirring the contents with circular movements until the
          color of the solution changes from light pink to dark pink or red to
          green. The transition occurs quickly, after one drop. 6. The number of
          drops should be multiplied by 0.712, the resulting value will be the
          hardness of the tested water, which should be entered into the form.
          To determine the required hardness, refer to the tables below.
          <Table bordered hover size="sm">
            <thead>
              <tr>
                <td>Water</td>
                <td>Hardness, gH</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Very soft water</td>
                <td>up to 1.5</td>
              </tr>
              <tr>
                <td>Soft water</td>
                <td>1.5 - 4.0</td>
              </tr>
              <tr>
                <td>Average hardness</td>
                <td>4.0 - 8.0</td>
              </tr>
              <tr>
                <td>Hard water</td>
                <td>8.0 - 12.0</td>
              </tr>
              <tr>
                <td>Very hard water</td>
                <td>more than 12.0</td>
              </tr>
            </tbody>
          </Table>
          *It is recommended to use water with a hardness of no more than 7.5
          gH.
        </InfoPanel>
        <InfoPanel title="Determination of water pH">
          <p>
            Acidity of water or pH. This parameter characterizes the measure of
            activity of hydrogen ions. The main range of pH values is from 1 to
            14. Solutions with a pH of 1 are very acidic, with a pH of 14 being
            very alkaline; a pH value of 7 corresponds to a neutral reaction. In
            field conditions, the pH level can be measured using a pH meter or
            test strips. Each preparation has its optimal pH level for preparing
            a working solution
          </p>
          <p>
            Pesticides sensitive to alkaline hydrolysis are those that quickly
            degrade at a pH greater than 7.0, for example: derivatives of 2,4-D,
            glyphosate, ammonium salt of imazethapyr, pyrethroids,
            chlorothalonil, organophosphate insecticides, and carbamates.
          </p>
          <p>
            In case the pH of the water you are using to prepare the working
            solution is higher than 7.0, use special pH- correction agents.
            Water with a pH value of 3.5-6.0 is acceptable for preparing and
            short-term (12-24 hours) storage of some working solutions. When
            using water with a pH value of 6.1-7.0, the prepared working
            solution should be used immediately. Do not store it for more than
            1-2 hours, as the effectiveness of the solution decreases
            significantly afterwards. For water with a pH value higher than 7.0,
            it is essential to use a pH- corrector.
          </p>
          <p>
            Pesticides sensitive to acidic hydrolysis are those that rapidly
            degrade at a pH lower than 7.0. Representatives of this group
            include sulfonylureas. If the pH of the working solution is less
            than 7.0, it is necessary to use special pH+ correctors or introduce
            the preparation as soon as possible, until the active substance has
            been destroyed as a result of hydrolysis
          </p>
          <p>
            Therefore, the most optimal pH value for preparing of the working
            solution is pH = 5-7.
          </p>
          <p>
            To perform express pH correction of the tested water, you will need
            a pH- corrector and pH indicator test strips. The analysis procedure
            is as follows: Pour 200 ml of the tested water into a container, add
            0.05 ml of pH- corrector using an insulin syringe, and mix the
            solution until the color of the litmus strip changes to the required
            shade specified in the test kit. Record the amount of the corrector
            used in units (1 unit - 0.1 ml of the corrector).
          </p>
          *The recommended average value of correction units for decreasing pH
          is 1.5.
        </InfoPanel>
      </div>

      <form onSubmit={submitHandler}>
        <div className="tank-form">
          <h5>Required fields to fill in:</h5>
          <div>
            <label>Quantity of hectares, ha</label>
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
            <label>Volume of tank for treated water, m3</label>
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
            <label>Sprayer tank volume, m3</label>
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
            <label>Consumption of the prepared solution, l/ha</label>
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
            <label>Current hardness, gH</label>
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
            <label>Required hardness, gH</label>
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
            <label>Value of correction units for decreasing pH</label>
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

          <h5>Fill in the fields if necessary:</h5>
          <div>
            <label>Pesticide name</label>
            <input
              type="text"
              key="pesticide_1"
              name="pesticide_1"
              onChange={inputFieldHandler}
            />
            <label>Preparation form</label>
            <input
              type="text"
              key="form_pesticide_1"
              name="form_pesticide_1"
              onChange={inputFieldHandler}
            />
            <label>Consumption l(kg)/ha</label>
            <input
              type="number"
              key="consumption_pesticide_1"
              min="0.001"
              max="20"
              step="0.001"
              name="consumption_pesticide_1"
              onChange={inputFieldHandler}
            />
            <label>Price</label>
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
            <label>Pesticide name</label>
            <input
              type="text"
              key="pesticide_2"
              name="pesticide_2"
              onChange={inputFieldHandler}
            />
            <label>Preparation form</label>
            <input
              type="text"
              key="form_pesticide_2"
              name="form_pesticide_2"
              onChange={inputFieldHandler}
            />
            <label>Consumption l(kg)/ha</label>
            <input
              type="number"
              key="consumption_pesticide_2"
              min="0.001"
              max="20"
              step="0.001"
              name="consumption_pesticide_2"
              onChange={inputFieldHandler}
            />
            <label>Price</label>
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
            <label>Pesticide name</label>
            <input
              type="text"
              key="pesticide_3"
              name="pesticide_3"
              onChange={inputFieldHandler}
            />
            <label>Preparation form</label>
            <input
              type="text"
              key="form_pesticide_3"
              name="form_pesticide_3"
              onChange={inputFieldHandler}
            />
            <label>Consumption l(kg)/ha</label>
            <input
              type="number"
              key="consumption_pesticide_3"
              min="0.001"
              max="20"
              step="0.001"
              name="consumption_pesticide_3"
              onChange={inputFieldHandler}
            />
            <label>Price</label>
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
            <label>Surfactant name</label>
            <input
              type="text"
              key="sas"
              name="sas"
              onChange={inputFieldHandler}
            />
            <label>Consumption ml/l prepared solution</label>
            <input
              type="number"
              key="consumption_sas"
              min="0.001"
              max="1000"
              step="0.001"
              name="consumption_sas"
              onChange={inputFieldHandler}
            />
            <label>Price</label>
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
            <label>Complex fertilizer name</label>
            <input
              type="text"
              key="complex_fertilizer"
              name="complex_fertilizer"
              onChange={inputFieldHandler}
            />
            <label>Consumption l/ha</label>
            <input
              type="number"
              key="consumption_complex_fertilizer"
              min="0.1"
              max="1000"
              step="0.1"
              name="consumption_complex_fertilizer"
              onChange={inputFieldHandler}
            />
            <label>Price</label>
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
              Calculate
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
