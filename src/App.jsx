import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Hotels from "./Hotels";
import Filters from "./Filters";
import Error from "./Error";
import { hotelsData } from "./assets/data";
import { roomSize, roomPrice } from "./formatData";

function App() {
  const [country, setCountry] = useState("todos");
  const [size, setSize] = useState("todos");
  const [price, setPrice] = useState("todos");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [hotels, setHotels] = useState(hotelsData);

  const hotelsFilters = () => {
    return hotels.filter((hotel) => {
      if (country === "todos") return true;
      else return hotel.country.toLowerCase() === country.toLowerCase();
    });
  };

  const hotelFiltered = hotelsFilters();

  return (
    <div className="App">
      <Header country={country} from={from} to={to} price={price} size={size} />
      <Filters
        country={country}
        size={size}
        price={price}
        from={from}
        to={to}
        setFrom={setFrom}
        setTo={setTo}
        setCountry={setCountry}
        setSize={setSize}
        setPrice={setPrice}
      />
      {hotels.length > 0 ? <Hotels data={hotelFiltered} /> : <Error />}
    </div>
  );
}

export default App;
