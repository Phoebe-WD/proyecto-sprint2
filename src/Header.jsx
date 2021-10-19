import "./Header.css";
import { formatDate } from "./formatData";

export default function Header(props) {
  return (
    <header className="Header">
      <div className="Header-container">
        <h1>Hoteles</h1>
        <p>
          {props.from === "" && props.to === ""
            ? `En cualquier fecha.`
            : `Desde el ${formatDate(props.from)}, hasta el ${formatDate(
                props.to
              )}`}
        </p>
        <p>
          {props.country === "" ? `En cualquier país.` : `En ${props.country}.`}
        </p>
        <p>
          {props.price === ""
            ? `De cualquier precio.`
            : `De precio ${props.price}.`}
        </p>
        <p>
          {props.size === ""
            ? `De cualquier tamaño.`
            : `De tamaño ${props.size}.`}
        </p>
      </div>
    </header>
  );
}
