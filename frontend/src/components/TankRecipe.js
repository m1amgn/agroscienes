import React from "react";

function TankRecipe(props) {
  const recipeData = props["serverData"]["recipe_on_tank"];
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
              Add {pesticideRecipe["pesticide_1"]} in amount of{" "}
              {pesticideRecipe["quantity_of_pesticide_1"]} l (kg).
            </p>
          ) : null}
          {pesticideRecipe["quantity_of_pesticide_2"] !== null ? (
            <p>
              Add {pesticideRecipe["pesticide_2"]} in amount of{" "}
              {pesticideRecipe["quantity_of_pesticide_2"]} l (kg).
            </p>
          ) : null}
          {pesticideRecipe["quantity_of_pesticide_3"] !== null ? (
            <p>
              Add {pesticideRecipe["pesticide_3"]} in amount of{" "}
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
              Then add {fertilizeSasRecipe["sas"]} in amount of{" "}
              {fertilizeSasRecipe["quantity_of_sas"]} l.
            </p>
          ) : null}
          {fertilizeSasRecipe["quantity_of_complex_fertilize"] !== null ? (
            <p>
              Then add {fertilizeSasRecipe["complex_fertilizer"]} in amount of{" "}
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
          <h5>Recipe for the tank of the solution unit</h5>
          <p>
            Fill the tank of the mixing unit with prepared water up to 2/3 while
            constantly stirring and add the products in the sequence specified
            below. Each previous product must be completely dissolved. To
            prepare a working solution from powders, the required amount of the
            product is poured into a separate small container, filled with a
            small amount of water, and shaken until a homogeneous mass is
            obtained:
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
      <h5>Recipe for water treatment</h5>
      <p>Amount of gH- on water tank {quantityOfRO260} l</p>
      <p>Amount of pH- on water tank {quantityOfRO203} l</p>
      {recipeDataShow(recipeData)}
    </div>
  );
}

export default TankRecipe;
