import React, { useState, useEffect } from "react";
import { Country } from "../../../api";
import { useAuth } from "../../../hooks";

import { CountriesL } from "./CountriesList";
import { Loader } from "semantic-ui-react";

const countryController = new Country();

export function List(props) {
  const { reload, role, onReload } = props;
  const [countries, setCountries] = useState(null);
  const { accessToken } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await countryController.getCountries(
          accessToken,
          role
        );
        console.log("hola");
        console.log(response);
        setCountries(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload]);

  if (!countries) return <Loader active inline="centered" />;
  return <CountriesL countries={countries} onReload={onReload} />;
}
