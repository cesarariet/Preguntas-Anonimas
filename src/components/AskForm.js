import { createAsk } from '../api';

const AskForm = ({ handlerChange }) => {
  function handlerClick() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const practica = document.querySelector('#practica').value || 'Ninguna';
    const ejercicio = document.querySelector('#ejercicio').value || 'Ninguno';
    const actividad = document.querySelector('#actividad').value || 'Ninguna';
    const pending = true;
    if (!title) return alert('Es obligatorio escribir una pregunta');
    createAsk({
      course: window.location.pathname.slice(1),
      title,
      description,
      practica,
      ejercicio,
      actividad,
      pending,
    }).then(() => window.location.reload());
  }
  return (
    <>
      <form>
        <input
          type="number"
          name="actividad"
          id="actividad"
          placeholder="Actividad"
          onChange={handlerChange}
        />
        <input
          type="number"
          name="practica"
          id="practica"
          onChange={handlerChange}
          placeholder="Practica"
        />
        <input
          type="number"
          name="ejercicio"
          id="ejercicio"
          placeholder="Ejercicio"
          onChange={handlerChange}
        />
        <label>
          Pregunta: <input type="text" name="title" id="title" />
        </label>
        <label>
          Comentario: <textarea name="description" id="description" />
        </label>
        <button type="button" onClick={handlerClick}>
          Enviar Pregunta
        </button>
      </form>
    </>
  );
};

export default AskForm;
