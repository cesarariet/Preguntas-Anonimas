import { createAsk } from '../api';
import './AskForm.css';

const AskForm = ({ handlerChange }) => {
  function handlerClick() {
    const title = document.querySelector('#title').value;
    const comment = document.querySelector('#comment').value;
    const practica = document.querySelector('#practica').value || 'Ninguna';
    const ejercicio = document.querySelector('#ejercicio').value || 'Ninguno';
    const actividad = document.querySelector('#actividad').value || 'Ninguna';
    const pending = true;
    if (!title) return alert('Es obligatorio escribir una pregunta');
    createAsk({
      course: window.location.pathname.slice(1),
      title,
      comment,
      practica,
      ejercicio,
      actividad,
      pending,
    }).then(() => window.location.reload());
  }
  return (
    <>
      <form>
        <label>
          Actividad:{' '}
          <input
            type="number"
            name="actividad"
            id="actividad"
            onChange={handlerChange}
          />
        </label>

        <label>
          {'  '}
          Práctica:{' '}
          <input
            type="number"
            name="practica"
            id="practica"
            onChange={handlerChange}
          />
        </label>
        <label>
          {'  '}
          Ejercicio:{' '}
          <input
            type="number"
            name="ejercicio"
            id="ejercicio"
            onChange={handlerChange}
          />
        </label>
        <br />
        <label>
          Pregunta: <br />
          <input type="text" name="title" id="title" />
        </label>
        <br />
        <label>
          Comentario: <br />
          <textarea name="comment" id="comment" />
        </label>
        <br />
        <button type="button" onClick={handlerClick}>
          Enviar Pregunta
        </button>
      </form>
    </>
  );
};

export default AskForm;
