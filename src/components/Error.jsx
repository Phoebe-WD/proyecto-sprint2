import "../styles/Error.css";

export default function Error() {
  return (
    <section className="Error">
      <i className="fas fa-dizzy"></i>
      <h2>
        Lo sentimos, no se encuentran hoteles con los filtros seleccionados
      </h2>
      <h3>Por favor, intenta buscar con otro filtros.</h3>
    </section>
  );
}
