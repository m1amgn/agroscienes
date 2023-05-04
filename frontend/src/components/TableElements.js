import React from "react";
import Table from 'react-bootstrap/Table';
import "./TableElements.css";

function TableElements(props) {
  const concentrationsValues = props["serverData"]["concentrations"];
  const consumptionsValues = props["serverData"]["consumptions"];
  let elementsArray = [""];
  let concentrationsArray = ["Available soil nutrients, kg/ha"];
  let consumptionsArray = ["Required concentration of nutrients, kg/ha"];

  if (concentrationsValues) {
    for (let [key, value] of Object.entries(concentrationsValues[0])) {
      elementsArray.push(key);
      concentrationsArray.push(parseFloat(value).toFixed(2));
    }
  }

  if (consumptionsValues) {
    for (let value of Object.values(consumptionsValues[0])) {
      consumptionsArray.push(parseFloat(value).toFixed(2));
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
    <>
      <Table bordered hover size="sm">
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
      </Table>
    </>
  );
}

export default TableElements;
