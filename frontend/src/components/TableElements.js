import React from "react";

function TableElements(props) {
  const concentrationValues = props["serverData"]["concentrations"];
  const consumptionValues = props["serverData"]["consumptions"];
  let elements_array = [""];
  let concentrations_array = ["Доступные элементы в почве, кг/га"];
  let consumption_array = ["Необходимая концентрация элементов питания, кг/га"];
  if (concentrationValues) {
    for (let [key, value] of Object.entries(concentrationValues[0])) {
      elements_array.push(key);
      concentrations_array.push(value);
    }
  }
  if (consumptionValues) {
    for (let [, value] of Object.entries(consumptionValues[0])) {
      consumption_array.push(value);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {elements_array.length > 1
              ? elements_array.map((element) => {
                  return <td key={element.toString()}>{element}</td>;
                })
              : null}
          </tr>
        </thead>
        <tbody>
          <tr>
            {concentrations_array.length > 1
              ? concentrations_array.map((conc) => {
                  return <td key={conc.toString()}>{conc}</td>;
                })
              : null}
          </tr>
          <tr>
            {consumption_array.length > 1
              ? consumption_array.map((cons) => {
                  return <td key={cons.toString()}>{cons}</td>;
                })
              : null}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableElements;
