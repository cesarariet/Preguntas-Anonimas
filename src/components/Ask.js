const Ask = ({
  _id,
  title,
  comments,
  practica,
  ejercicio,
  actividad,
  pending,
  date,
}) => {
  return (
    <div className="ask">
      <h2 className="ask__title">{title}</h2>
      <div className="ask__description">
        {comments.map((comment) => (
          <>
            {comment} <br />
          </>
        ))}
      </div>
      <div className="ask__metadata">
        <div>Actividad: {actividad}</div>
        <div>Práctica: {practica}</div>
        <div>Ejercicio: {ejercicio}</div>
        <div>Estado: {pending ? 'pendiente' : 'respondida'}</div>
      </div>
    </div>
  );
};

export default Ask;
