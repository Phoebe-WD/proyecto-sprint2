import "../styles/Header.css";
import { formatDate } from "./formatData";
import { useContext } from "react";
import GlobalContext from "../utils/globalContext";

export default function Header() {
  const { from, to, country, price, size } = useContext(GlobalContext);
  return (
    <header className="Header">
      <div className="Header-container">
        <h1>Hoteles</h1>
        <p>
          {!from ? (
            <span>Desde cualquier fecha, </span>
          ) : (
            <span>Desde el {formatDate(from)}, </span>
          )}
          {!to ? (
            <span>hasta cualquier fecha</span>
          ) : (
            <span> hasta el {formatDate(to)}</span>
          )}
        </p>
        <p>{country === "" ? `En cualquier país.` : `En ${country}.`}</p>
        <p>{price === "" ? `De cualquier precio.` : `De precio ${price}.`}</p>
        <p>{size === "" ? `De cualquier tamaño.` : `De tamaño ${size}.`}</p>
      </div>
    </header>
  );
}
