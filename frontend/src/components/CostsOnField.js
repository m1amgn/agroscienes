import React from "react";

function CostsOnField(props) {
  const costsData = props["serverData"]["costs_on_field"];
  if (!costsData) return null;
  console.log(costsData);

  const checkObjects = (obj) => {
    for (let [keys, values] of Object.entries(obj)) {
      console.log(values);
      if ((values !== null) & (values !== "")) {
        return true;
      }
    }
  };

  const pesticidesCost = (costsDataCopy) => {
    const pesticideCost = JSON.parse(JSON.stringify(costsDataCopy));
    delete pesticideCost["complex_fertilizer"];
    delete pesticideCost["costs_of_complex_fertilize"];
    delete pesticideCost["sas"];
    delete pesticideCost["costs_of_sas"];
    let checkedObject = checkObjects(pesticideCost);
    if (checkedObject !== true) {
      return null;
    } else {
      let content = [];
      content.push(
        <div>
          {pesticideCost["costs_of_pesticide_1"] !== null ? (
            <p>
              {pesticideCost["pesticide_1"]} на поле{" "}
              {pesticideCost["costs_of_pesticide_1"]} рублей
            </p>
          ) : null}
          {pesticideCost["costs_of_pesticide_2"] !== null ? (
            <p>
              {pesticideCost["pesticide_2"]} на поле{" "}
              {pesticideCost["costs_of_pesticide_2"]} рублей
            </p>
          ) : null}
          {pesticideCost["costs_of_pesticide_3"] !== null ? (
            <p>
              {pesticideCost["pesticide_3"]} на поле{" "}
              {pesticideCost["costs_of_pesticide_3"]} рублей
            </p>
          ) : null}
        </div>
      );
      return content;
    }
  };

  const fertilizeSasCost= (costsDataCopy) => {
    const fertilizeSasCost = JSON.parse(JSON.stringify(costsDataCopy));
    delete fertilizeSasCost["pesticide_1"];
    delete fertilizeSasCost["pesticide_2"];
    delete fertilizeSasCost["pesticide_3"];
    delete fertilizeSasCost["costs_of_pesticide_1"];
    delete fertilizeSasCost["costs_of_pesticide_2"];
    delete fertilizeSasCost["costs_of_pesticide_3"];
    let checkedObject = checkObjects(fertilizeSasCost);
    if (checkedObject !== true) {
      return null;
    } else {
      let content = [];
      content.push(
        <div>
          {fertilizeSasCost["costs_of_sas"] !== null ? (
            <p>
              {fertilizeSasCost["sas"]} на поле{" "}
              {fertilizeSasCost["costs_of_sas"]} рублей
            </p>
          ) : null}
          {fertilizeSasCost["costs_of_complex_fertilize"] !== null ? (
            <p>
              {fertilizeSasCost["complex_fertilizer"]} на поле{" "}
              {fertilizeSasCost["costs_of_complex_fertilize"]} рублей
            </p>
          ) : null}
        </div>
      );
      return content;
    }
  };

  const costDataShow = (costsData) => {
    const costDataCopy = JSON.parse(JSON.stringify(costsData[0]));
    delete costDataCopy["costs_of_RO260"];
    delete costDataCopy["costs_of_RO203"];
    let checkedObject = checkObjects(costDataCopy);
    if (checkedObject !== true) {
      return null;
    } else {
      let content = [];
      content.push(
        <div>
          {pesticidesCost(costDataCopy)}
          {fertilizeSasCost(costDataCopy)}
        </div>
      );
      return content;
    }
  };

  let costsOfRO260 = costsData[0]["costs_of_RO260"];
  let costsOfRO203 = costsData[0]["costs_of_RO203"];

  return (
    <div>
      <h3>Стоимость на поле</h3>
      <p>РТ RO 260 (Ж-) на поле {costsOfRO260} руболей</p>
      <p>РТ RO 203 (pH-) на поле {costsOfRO203} рублей</p>
      {costDataShow(costsData)}
    </div>
  );
}

export default CostsOnField;
