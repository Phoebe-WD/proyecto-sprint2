import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Hotels from "./Hotels";
import Filters from "./Filters";
import { hotelsData } from "./assets/data";
import { roomSize, roomPrice } from "./formatData";

function App() {
  const [country, setCountry] = useState("todos");
  const [size, setSize] = useState("todos");
  const [price, setPrice] = useState("todos");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
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
      <Hotels data={hotelsFilters} />
    </div>
  );
}

export default App;
