import React from "react";

function TestSolution(props) {
  const recipeData = props["serverData"]["test_solution"];
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
              Добавьте {pesticideRecipe["pesticide_1"]} в количестве{" "}
              {pesticideRecipe["quantity_of_pesticide_1"]} мл (г).
            </p>
          ) : null}
          {pesticideRecipe["quantity_of_pesticide_2"] !== null ? (
            <p>
              Добавьте {pesticideRecipe["pesticide_2"]} в количестве{" "}
              {pesticideRecipe["quantity_of_pesticide_2"]} мл (г).
            </p>
          ) : null}
          {pesticideRecipe["quantity_of_pesticide_3"] !== null ? (
            <p>
              Добавьте {pesticideRecipe["pesticide_3"]} в количестве{" "}
              {pesticideRecipe["quantity_of_pesticide_3"]} мл (г).
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
              Далее добавьте {fertilizeSasRecipe["sas"]} (если ПАВ на масляной основе, то
              добавлять первым) в количестве{" "}
              {fertilizeSasRecipe["quantity_of_sas"]} мл (г).
            </p>
          ) : null}
          {fertilizeSasRecipe["quantity_of_complex_fertilize"] !== null ? (
            <p>
              Далее добавьте {fertilizeSasRecipe["complex_fertilizer"]} в
              количестве {fertilizeSasRecipe["quantity_of_complex_fertilize"]} мл (г).
            </p>
          ) : null}
        </div>
      );
      return content;
    }
  };

  const recipeDataShow = (recipeData) => {
    const recipeDataCopy = JSON.parse(JSON.stringify(recipeData[0]));
    let checkedObject = checkObjects(recipeDataCopy);
    if (checkedObject !== true) {
      return null;
    } else {
      let content = [];
      content.push(
        <div>
          <h5>Тестовый раствор</h5>
          <p>
            Тестовый раствор на 1 литр подготовленной воды:
          </p>
          {pesticidesRecipe(recipeDataCopy)}
          {fertilizeSasRecipe(recipeDataCopy)}
        </div>
      );
      return content;
    }
  };


  return (
    <div>
      {recipeDataShow(recipeData)}
    </div>
  );
}

export default TestSolution;
