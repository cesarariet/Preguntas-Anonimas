import { getAsks, createAsk } from '../api';

export const getAsksAction = (course) => async (dispatch) => {
  const miLocalStorage = window.localStorage.getItem(
    'preguntas_anonimas_store_V1'
  );
  if (miLocalStorage) {
    dispatch({
      type: 'get_asks',
      payload: JSON.parse(miLocalStorage),
    });
  }
  dispatch({
    type: 'loading',
  });
  try {
    const asks = await getAsks(course);
    dispatch({
      type: 'get_asks',
      payload: asks,
    });
    window.localStorage.setItem(
      'preguntas_anonimas_store_V1',
      JSON.stringify(asks)
    );
  } catch (error) {
    console.log('Action error: ' + error);
    dispatch({
      type: 'error',
      payload: error.message,
    });
  }
};

export const createAskAction = (ask) => async (dispatch) => {
  dispatch({
    type: 'loading',
  });
  try {
    await createAsk(ask);
    dispatch({
      type: 'create_ask',
      payload: ask,
    });
  } catch (error) {
    dispatch({
      type: 'error',
      payload: error.message,
    });
  }
};

export const filterAsksAction = (filter) => (dispatch) => {
  const { asks, practica, actividad, ejercicio } = filter;
  let asksFiltered = asks;
  if (practica !== 'Ninguna') {
    asksFiltered = asksFiltered.filter(
      (ask) => ask.practica === String(practica) || ask.practica === 'Ninguna'
    );
    console.log('cambia practica');
  }
  if (actividad !== 'Ninguna')
    asksFiltered = asksFiltered.filter(
      (ask) =>
        ask.actividad === String(actividad) || ask.actividad === 'Ninguna'
    );
  if (ejercicio !== 'Ninguno')
    asksFiltered = asksFiltered.filter(
      (ask) =>
        ask.ejercicio === String(ejercicio) || ask.ejercicio === 'Ninguno'
    );
  console.log(asksFiltered);

  dispatch({
    type: 'filter_asks',
    payload: asksFiltered,
  });
};
