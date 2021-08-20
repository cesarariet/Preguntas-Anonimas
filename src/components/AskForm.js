import { createAsk } from '../api';

const AskForm = ({ handlerChange }) => {
  function handlerClick(event) {
    const form = event.target;
    const course = document.querySelector('#course').value;
    const title = form.querySelector('#title').value;
    const description = form.querySelector('#description').value;
    const practica = form.querySelector('#practica').value || 'Ninguna';
    const ejercicio = form.querySelector('#ejercicio').value || 'Ninguno';
    const actividad = form.querySelector('#actividad').value || 'Ninguna';
    const pending = true;
    if (!(course && title))
      return alert('Es obligatorio elegir un curso y escribir una pregunta');
    createAsk({
      course,
      title,
      description,
      practica,
      ejercicio,
      actividad,
      pending,
    });
  }
  return (
    <>
      <form>
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
        <input
          type="number"
          name="actividad"
          id="actividad"
          placeholder="Actividad"
          onChange={handlerChange}
        />
        Pregunta: <input type="text" name="title" id="title" />
        Comentario: <input type="text" name="description" id="description" />
        <button type="button" onClick={handlerClick}>
          Enviar Pregunta
        </button>
      </form>
    </>
  );
};

export default AskForm;
