import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response);
    });
  }, []);

  return <div>hi tahrer !!</div>;
}
