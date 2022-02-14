import Hotel from "./Hotel";
import "../styles/Hotels.css";
import Error from "./Error";
import { useContext } from "react";
import GlobalContext from "../utils/globalContext";

export default function Hotels() {
  const { hotels } = useContext(GlobalContext);

  return (
    <main className="Hotels">
      <div className="Hotels-container">
        {hotels.length > 0 ? (
          hotels?.map((hotel) => {
            return (
              <Hotel
                key={hotel.slug}
                name={hotel.name}
                photo={hotel.photo}
                description={hotel.description}
                availabilityFrom={hotel.availabilityFrom}
                availabilityTo={hotel.availabilityTo}
                city={hotel.city}
                country={hotel.country}
                rooms={hotel.rooms}
                price={hotel.price}
              />
            );
          })
        ) : (
          <Error />
        )}
      </div>
    </main>
  );
}
