import React from "react";

function TableElements(props) {
  const concentrationsValues = props["serverData"]["concentrations"];
  const consumptionsValues = props["serverData"]["consumptions"];
  let elementsArray = [""];
  let concentrationsArray = ["Доступные элементы в почве, кг/га"];
  let consumptionsArray = ["Необходимая концентрация элементов питания, кг/га"];

  if (concentrationsValues) {
    for (let [key, value] of Object.entries(concentrationsValues[0])) {
      elementsArray.push(key);
      concentrationsArray.push(value);
    }
  }

  if (consumptionsValues) {
    for (let value of Object.values(consumptionsValues[0])) {
      consumptionsArray.push(value);
    }
  }

  const getIdObject = (array) => {
    let objectWithId = {};
    for (let i = 0; i < array.length; i++) {
      objectWithId[i] = array[i];
    }
    return objectWithId;
  };

  let concentrationsIdObjects = getIdObject(concentrationsArray);
  let consumptionsIdObjects = getIdObject(consumptionsArray);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {elementsArray.length > 1
              ? elementsArray.map((element) => {
                  return (
                    <td key={elementsArray.indexOf(element)}>{element}</td>
                  );
                })
              : null}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(concentrationsIdObjects).length > 1
              ? Object.entries(concentrationsIdObjects).map(([id, conc]) => {
                  return <td key={id}>{conc}</td>;
                })
              : null}
          </tr>
          <tr>
            {Object.keys(consumptionsIdObjects).length > 1
              ? Object.entries(consumptionsIdObjects).map(([id, cons]) => {
                  return <td key={id}>{cons}</td>;
                })
              : null}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableElements;
