import Hotel from "./Hotel";
import "./Hotels.css";
import Error from "./Error";

export default function Hotels(props) {
  let hotels = props.data;
  return (
    <div className="Hotels">
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
    </div>
  );
}
