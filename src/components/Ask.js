import './Ask.css';

const Ask = ({
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
      <div className="ask__metadata">
        <div>Actividad: {actividad}</div>
        <div>Práctica: {practica}</div>
        <div>Ejercicio: {ejercicio}</div>
        <div>Estado: {pending ? 'pendiente' : 'respondida'}</div>
      </div>
      <ul className="ask__comments">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ask;
