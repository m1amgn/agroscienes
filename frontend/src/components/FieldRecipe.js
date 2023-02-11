import React from "react";

function FieldRecipe(props) {
  const recipeData = props["serverData"]["recipe_on_field"];
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
              Количество {pesticideRecipe["pesticide_1"]} на поле{" "}
              {pesticideRecipe["quantity_of_pesticide_1"]} л (кг).
            </p>
          ) : null}
          {pesticideRecipe["quantity_of_pesticide_2"] !== null ? (
            <p>
              Количество {pesticideRecipe["pesticide_2"]} на поле{" "}
              {pesticideRecipe["quantity_of_pesticide_2"]} л (кг).
            </p>
          ) : null}
          {pesticideRecipe["quantity_of_pesticide_3"] !== null ? (
            <p>
              Количество {pesticideRecipe["pesticide_3"]} на поле{" "}
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
              Количество {fertilizeSasRecipe["sas"]} на поле{" "}
              {fertilizeSasRecipe["quantity_of_sas"]} л.
            </p>
          ) : null}
          {fertilizeSasRecipe["quantity_of_complex_fertilize"] !== null ? (
            <p>
              Количество {fertilizeSasRecipe["complex_fertilizer"]} на поле{" "}
              {fertilizeSasRecipe["quantity_of_complex_fertilize"]} л (кг).
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
      <h3>Рецепт на поле</h3>
      <p>Количество РТ RO 260 (Ж-) на поле {quantityOfRO260} л</p>
      <p>Количество РТ RO 203 (pH-) на поле {quantityOfRO203} л</p>
      {recipeDataShow(recipeData)}
    </div>
  );
}

export default FieldRecipe;
