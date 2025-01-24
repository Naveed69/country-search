import { useEffect, useState } from "react";
import Card from "./Card";
import "./Display.css";
const DisplayCountries = () => {
  const url =
    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
  const [countries, setCountires] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setCountires(jsonData);
        setFilterCountry(jsonData);
      } catch (e) {
        console.error("Error while fetching API->", e);
      }
    };
    fetchApi();
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const filtered = () => {
      setFilterCountry(
        countries.filter((country) =>
          country.common.toLowerCase().includes(search.toLowerCase())
        )
      );
    };
    filtered();
  }, [search]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="search"
        placeholder="Search for Country"
      />
      <hr />
      <div className="countryCard">
        {filterCountry.map((countryData) => {
          // console.log(countryData.common, countryData.png);
          return <Card country={countryData.common} flag={countryData.png} />;
        })}
      </div>
    </>
  );
};
export default DisplayCountries;
