import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import Hotels from "./components/Hotels";
import Filters from "./components/Filters";
import { hotelsData } from "./assets/data";
import { roomSize, roomPrice } from "./components/formatData";
import GlobalContext from "./utils/globalContext";

function App() {
  const [country, setCountry] = useState("todos");
  const [size, setSize] = useState("todos");
  const [price, setPrice] = useState("todos");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const hotels = hotelsData;
  const msFrom = new Date(from + "T00:00:00").getTime();
  const msTo = new Date(to + "T00:00:00").getTime();

  const hotelsFilters = hotels
    .filter((hotel) => {
      if (country === "todos") return true;
      else return hotel.country.toLowerCase() === country.toLowerCase();
    })
    .filter((hotel) => {
      if (price === "todos") return true;
      else return roomPrice(hotel.price) === price;
    })
    .filter((hotel) => {
      if (size === "todos") {
        return true;
      } else {
        return roomSize(hotel.rooms) === size;
      }
    })
    .filter((hotel) => {
      if (from && to) {
        return hotel.availabilityFrom >= msFrom && msTo <= hotel.availabilityTo;
      } else {
        return true;
      }
    });

  return (
    <GlobalContext.Provider
      value={{
        country,
        setCountry,
        size,
        setPrice,
        setFrom,
        setSize,
        from,
        to,
        price,
        setTo,
        hotels: hotelsFilters,
      }}
    >
      <div className="App">
        <Header />
        <Filters />
        <Hotels />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
