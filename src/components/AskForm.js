import { connect } from 'react-redux';
import { createAskAction, filterAsksAction } from '../actions/asksActions';

import './AskForm.css';

const AskForm = ({ asks, createAskAction, filterAsksAction }) => {
  function handlerChange() {
    const practica = document.querySelector('#practica').value || 'Ninguna';
    const ejercicio = document.querySelector('#ejercicio').value || 'Ninguno';
    const actividad = document.querySelector('#actividad').value || 'Ninguna';

    filterAsksAction({ asks, practica, ejercicio, actividad });
  }
  function handlerClick() {
    const title = document.querySelector('#title').value;
    const comment = document.querySelector('#comment').value;
    const practica = document.querySelector('#practica').value || 'Ninguna';
    const ejercicio = document.querySelector('#ejercicio').value || 'Ninguno';
    const actividad = document.querySelector('#actividad').value || 'Ninguna';
    const pending = true;
    if (!title) return alert('Es obligatorio escribir una pregunta');
    createAskAction({
      course: window.location.pathname.slice(1),
      title,
      comment,
      practica,
      ejercicio,
      actividad,
      pending,
    });
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

function mapStateToProps(reducers) {
  return reducers.asksReducers;
}

export default connect(mapStateToProps, { createAskAction, filterAsksAction })(
  AskForm
);
