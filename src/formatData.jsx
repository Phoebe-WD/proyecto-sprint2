const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const formatDate = (unix) => {
  const date = new Date(unix);
  const year = date.getFullYear();
  const day = date.getDay();
  const monthDay = date.getUTCDate();
  const month = date.getMonth();
  return `${days[day]}, ${monthDay} de ${months[month]} de ${year}`;
};

const roomSize = (rooms) => {
  if (rooms <= 10) return "Pequeño";
  if (rooms > 10 && rooms < 20) return "Mediano";
  if (rooms >= 20) return "Grande";

  return "";
};

const roomPrice = (price) => {
  if (price === 1) return "económico";
  if (price === 2) return "confort";
  if (price === 3) return "lujoso";
  if (price === 4) return "magnífico";
  return "";
};

export { formatDate, roomSize, roomPrice };
