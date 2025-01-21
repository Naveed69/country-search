import { useEffect, useState } from "react";
import Card from "./Card";
import "./Display.css";
const DisplayCountries = () => {
  const url =
    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
  const [countries, setCountires] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setCountires(jsonData);
      } catch (e) {
        console.error("Error while fetching API->", e);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      <input type="text" className="search" placeholder="Search for Country" />
      <Card countries />
    </>
  );
};
export default DisplayCountries;
