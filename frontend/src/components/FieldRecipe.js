import React from "react";

function FieldRecipe(props) {
  const recipeData = props["serverData"]["recipe_on_field"];
  if (!recipeData) return null;

  const checkObjects = (obj) => {
    for (let [keys, values] of Object.entries(obj)) {
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
              Amount of {pesticideRecipe["pesticide_1"]} on field{" "}
              {pesticideRecipe["quantity_of_pesticide_1"]} l (kg).
            </p>
          ) : null}
          {pesticideRecipe["quantity_of_pesticide_2"] !== null ? (
            <p>
              Amount of {pesticideRecipe["pesticide_2"]} on field{" "}
              {pesticideRecipe["quantity_of_pesticide_2"]} l (kg).
            </p>
          ) : null}
          {pesticideRecipe["quantity_of_pesticide_3"] !== null ? (
            <p>
              Amount of {pesticideRecipe["pesticide_3"]} on field{" "}
              {pesticideRecipe["quantity_of_pesticide_3"]} l (kg).
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
              Amount of {fertilizeSasRecipe["sas"]} on field{" "}
              {fertilizeSasRecipe["quantity_of_sas"]} l.
            </p>
          ) : null}
          {fertilizeSasRecipe["quantity_of_complex_fertilize"] !== null ? (
            <p>
              Amount of {fertilizeSasRecipe["complex_fertilizer"]} on field{" "}
              {fertilizeSasRecipe["quantity_of_complex_fertilize"]} l (kg).
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
      <h5>Recipe on field</h5>
      <p>Amount of gH- on field {quantityOfRO260} l</p>
      <p>Amount of pH- on field {quantityOfRO203} l</p>
      {recipeDataShow(recipeData)}
    </div>
  );
}

export default FieldRecipe;
