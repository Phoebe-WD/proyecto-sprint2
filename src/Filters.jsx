import "./Filters.css";
import React from "react";

export default function Filters({
  country,
  size,
  price,
  from,
  to,
  setFrom,
  setTo,
  setPrice,
  setSize,
  setCountry,
}) {
  const resetFilters = () => {
    // Resetear filtros a su estado inicial
    setCountry("todos");
    setSize("todos");
    setPrice("todos");
    setFrom("");
    setTo("");
  };
  const handleCountry = (evento) => {
    setCountry(evento.target.value);
  };
  const handleSize = (evento) => {
    setSize(evento.target.value);
  };
  const handlePrice = (evento) => {
    setPrice(evento.target.value);
  };

  const handleDateFrom = (evento) => {
    setFrom(evento.target.value);
  };
  const handleDateTo = (evento) => {
    setTo(evento.target.value);
  };
  return (
    <section className="Filters">
      <div className="Filters-container">
        <form className="Filters-date" name="date">
          <input
            type="date"
            value={from}
            className="dateInputs"
            name="from"
            required
            onChange={handleDateFrom}
          />
          <input
            type="date"
            name="to"
            id="to"
            value={to}
            onChange={handleDateTo}
            className="dateInputs"
            required
          />
        </form>
        <select
          name="country"
          id="country"
          onChange={handleCountry}
          value={country}
        >
          <option value="todos">Todos los países</option>
          <option value="Argentina">Argentina</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Brasil">Brasil</option>
        </select>
        <select name="rooms" id="rooms" onChange={handleSize} value={size}>
          <option value="todos">Todos los tamaños</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>
        <select name="price" id="price" onChange={handlePrice} value={price}>
          <option value="todos">Todos los precios</option>
          <option value="económico">$</option>
          <option value="confort">$$</option>
          <option value="lujoso">$$$</option>
          <option value="magnífico">$$$$</option>
        </select>
        <button onClick={resetFilters}>
          <i className="fas fa-trash"></i>LIMPIAR
        </button>
      </div>
    </section>
  );
}
