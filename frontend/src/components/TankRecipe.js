import React from "react";

function TankRecipe(props) {
  const recipeData = props["serverData"]["recipe_on_tank"];
  if (!recipeData) return null;
  console.log(recipeData);

  const checkObjects = (obj) => {
    for (let [keys, values] of Object.entries(obj)) {
      console.log(values);
      if ((values !== null) & (values !== "")) {
        return true;
      }
    }
  };

  const pesticidesRecipe = (recipeDataCopy) => {
    const pesticideRecipe = JSON.parse(JSON.stringify(recipeDataCopy));
    delete pesticideRecipe["complex_fertilizer"];
    delete pesticideRecipe["quantity_of_complex_fertilize"];
    delete pesticideRecipe["sas"];
    delete pesticideRecipe["quantity_of_sas"];
    let checkedObject = checkObjects(pesticideRecipe);
    if (checkedObject !== true) {
      return null;
    } else {
      let content = [];
      content.push(
        <div>
          {pesticideRecipe["quantity_of_pesticide_1"] !== null ? (
            <p>
              Добавьте {pesticideRecipe["pesticide_1"]} в количестве{" "}
              {pesticideRecipe["quantity_of_pesticide_1"]} л (кг).
            </p>
          ) : null}
          {pesticideRecipe["quantity_of_pesticide_2"] !== null ? (
            <p>
              Добавьте {pesticideRecipe["pesticide_2"]} в количестве{" "}
              {pesticideRecipe["quantity_of_pesticide_2"]} л (кг).
            </p>
          ) : null}
          {pesticideRecipe["quantity_of_pesticide_3"] !== null ? (
            <p>
              Добавьте {pesticideRecipe["pesticide_3"]} в количестве{" "}
              {pesticideRecipe["quantity_of_pesticide_3"]} л (кг).
            </p>
          ) : null}
        </div>
      );
      return content;
    }
  };

  const fertilizeSasRecipe = (recipeDataCopy) => {
    const fertilizeSasRecipe = JSON.parse(JSON.stringify(recipeDataCopy));
    delete fertilizeSasRecipe["pesticide_1"];
    delete fertilizeSasRecipe["pesticide_2"];
    delete fertilizeSasRecipe["pesticide_3"];
    delete fertilizeSasRecipe["quantity_of_pesticide_1"];
    delete fertilizeSasRecipe["quantity_of_pesticide_2"];
    delete fertilizeSasRecipe["quantity_of_pesticide_3"];
    let checkedObject = checkObjects(fertilizeSasRecipe);
    if (checkedObject !== true) {
      return null;
    } else {
      let content = [];
      content.push(
        <div>
          {fertilizeSasRecipe["quantity_of_sas"] !== null ? (
            <p>
              Далее добавьте {fertilizeSasRecipe["sas"]} (если ПАВ Аллюр, то
              добавлять первым) в количестве{" "}
              {fertilizeSasRecipe["quantity_of_sas"]} л.
            </p>
          ) : null}
          {fertilizeSasRecipe["quantity_of_complex_fertilize"] !== null ? (
            <p>
              Далее добавьте {fertilizeSasRecipe["complex_fertilizer"]} в
              количестве {fertilizeSasRecipe["quantity_of_complex_fertilize"]} л
              (кг).
            </p>
          ) : null}
        </div>
      );
      return content;
    }
  };

  const recipeDataShow = (recipeData) => {
    const recipeDataCopy = JSON.parse(JSON.stringify(recipeData[0]));
    delete recipeDataCopy["quantity_of_RO260"];
    delete recipeDataCopy["quantity_of_RO203"];
    let checkedObject = checkObjects(recipeDataCopy);
    if (checkedObject !== true) {
      return null;
    } else {
      let content = [];
      content.push(
        <div>
          <h3>Бак растворного узла</h3>
          <p>
            Заполнить бак растворного узла подготовленной водой на 2/3, при
            постоянном перемешивании, вносить препараты в следующей
            последовательности, при этом каждый предыдущий препарат должен
            полностью раствориться. Для приготовления рабочего раствора из
            порошков необходимое количество препарата засыпают в отдельную малую
            емкость, заливают небольшим количеством воды и встряхивают до
            получения однородной массы (маточного раствора):
          </p>
          {pesticidesRecipe(recipeDataCopy)}
          {fertilizeSasRecipe(recipeDataCopy)}
        </div>
      );
      return content;
    }
  };

  let quantityOfRO260 = recipeData[0]["quantity_of_RO260"];
  let quantityOfRO203 = recipeData[0]["quantity_of_RO203"];

  return (
    <div>
      <h3>Рецепт на подготовку воды</h3>
      <p>Количество РТ RO 260 (Ж-) на емкость воды {quantityOfRO260} л</p>
      <p>Количество РТ RO 203 (pH-) на емкость воды {quantityOfRO203} л</p>
      {recipeDataShow(recipeData)}
    </div>
  );
}

export default TankRecipe;
