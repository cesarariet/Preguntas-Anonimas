const Ask = ({
  title,
  description,
  practica,
  ejercicio,
  actividad,
  pending,
  date,
}) => {
  return (
    <div className="ask">
      <h2 className="ask__title">{title}</h2>
      <div className="ask__description">{description}</div>
      <div className="ask__metadata">
        <div>Práctica: {practica}</div>
        <div>Ejercicio: {ejercicio}</div>
        <div>Actividad: {actividad}</div>
        <div>Estado: {pending ? 'pendiente' : 'respondida'}</div>
      </div>
    </div>
  );
};

export default Ask;
