import React from "react";
import "./Hotel.css";
import { formatDate } from "./formatData";

export default function Hotel(props) {
  const priceSign = [false, false, false, false];

  //función que permite visualizar los íconos de los precios en las Hotels de cada hotel
  const priceHandler = (qty) => {
    for (let i = 0; i <= qty; i++) {
      priceSign[i] = true;
    }
  };

  priceHandler(props.price);

  return (
    <div className="Hotel">
      <img src={props.photo} alt="" className="Hotel-img" />
      <h2 className="Hotel-name">{props.name}</h2>
      <div className="Hotel-date">
        <p>{formatDate(props.availabilityFrom)}</p>
      </div>
      <div className="Hotel-date">
        <p>{formatDate(props.availabilityTo)}</p>
      </div>
      <div className="Hotel-description">
        <p>{props.description}</p>
      </div>
      <div className="Hotel-snackBar">
        <p className="Hotel-country">
          <span className="Hotel-icon">
            <i className="fas fa-map-marker-alt"></i>{" "}
          </span>
          <span className="Hotel-room">
            {" "}
            {`${props.city}, ${props.country}`}{" "}
          </span>
        </p>
      </div>
      <div className="Hotel-roomsPricing">
        <div className="Hotel-snackBar">
          <p>
            <span className="Hotel-icon">
              <i className="fas fa-bed"></i>
            </span>{" "}
            <span className="Hotel-room">{`${props.rooms} Habitaciones`}</span>
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
}
