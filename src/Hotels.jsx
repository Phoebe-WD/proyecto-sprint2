import Hotel from "./Hotel";
import "./Hotels.css";

export default function Hotels(props) {
  let hotels = props.data;
  return (
    <div className="Hotels">
      <div className="Hotels-container">
        {hotels?.map((hotel) => {
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
        })}
      </div>
    </div>
  );
}
