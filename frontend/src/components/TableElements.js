import React, { useState, useEffect } from "react";


function TableElements(props) {
    const concentrationValues = props["concentrations"]
    const consumptionValues = props["consumptions"]

    console.log(concentrationValues)
    console.log(consumptionValues)

    return <h1>TableElements</h1>;
}

export default TableElements;