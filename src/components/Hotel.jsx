import React from "react";
import "../styles/Hotel.css";
import { formatDate } from "./formatData";

const Hotel = ({
  price,
  name,
  photo,
  description,
  availabilityFrom,
  availabilityTo,
  city,
  country,
  rooms,
}) => {
  const priceSign = [false, false, false, false];

  const priceHandler = (qty) => {
    for (let i = 0; i <= qty; i++) {
      priceSign[i] = true;
    }
  };

  priceHandler(price);

  return (
    <div className="Hotel">
      <img src={photo} alt="" className="Hotel-img" />
      <h2 className="Hotel-name">{name}</h2>
      <div className="Hotel-date">
        <p>{formatDate(availabilityFrom)}</p>
      </div>
      <div className="Hotel-date">
        <p>{formatDate(availabilityTo)}</p>
      </div>
      <div className="Hotel-description">
        <p>{description}</p>
      </div>
      <div className="Hotel-snackBar">
        <p className="Hotel-country">
          <span className="Hotel-icon">
            <i className="fas fa-map-marker-alt"></i>{" "}
          </span>
          <span className="Hotel-room"> {`${city}, ${country}`} </span>
        </p>
      </div>
      <div className="Hotel-roomsPricing">
        <div className="Hotel-snackBar">
          <p>
            <span className="Hotel-icon">
              <i className="fas fa-bed"></i>
            </span>{" "}
            <span className="Hotel-room">{`${rooms} Habitaciones`}</span>
          </p>
        </div>
        <div className="Hotel-pricing">
          <i
            className={
              priceSign[1] ? "fas fa-dollar-sign priceOn" : "fas fa-dollar-sign"
            }
          ></i>
          <i
            className={
              priceSign[2] ? "fas fa-dollar-sign priceOn" : "fas fa-dollar-sign"
            }
          ></i>
          <i
            className={
              priceSign[3] ? "fas fa-dollar-sign priceOn" : "fas fa-dollar-sign"
            }
          ></i>
          <i
            className={
              priceSign[4] ? "fas fa-dollar-sign priceOn" : "fas fa-dollar-sign"
            }
          ></i>
        </div>
      </div>
      <button className="btn">Reservar</button>
    </div>
  );
};

export default Hotel;
