import { useState, useEffect } from 'react';
import AskForm from './components/AskForm';
import AsksList from './components/AsksList';

import { getAsks } from './api';
const courses = ['51', '66', '62'];
const course = window.location.pathname.slice(1);
let asks = [];
let messageAskFilter = '';

function App() {
  const [asksFiltered, setAsksFiltered] = useState([]);
  // const [messageAskFilter, setMessageAskFilter] = useState('');
  useEffect(() => {
    if (courses.some((i) => i === course)) {
      getAsks(course)
        .then((res) => (asks = res))
        .then(() => setAsksFiltered(asks));
    }
  }, []);

  function printAsks(event) {
    const { name, value } = event.target;
    messageAskFilter = `Filtrando preguntas por ${name} ${value}`;
    if (isNaN(parseInt(value))) return setAsksFiltered(asks);
    return setAsksFiltered(
      asks.filter((ask) => ask[name] === value || isNaN(parseInt(ask[name])))
    );
  }
  function handlerClick() {
    messageAskFilter = '';
    return setAsksFiltered(asks);
  }
  return (
    <>
      <h1>Preguntas anónimas</h1>
      <p>
        Elija el curso, la actividad o práctica relacionado con la pregunta (si
        corresponde).
      </p>
      {courses.some((i) => i === course) ? (
        <>
          <AskForm handlerChange={printAsks} />
          <button name="resetear" onClick={handlerClick} type="button">
            Resetear
          </button>
          <p>{messageAskFilter}</p>
          <AsksList asksList={asksFiltered} />
        </>
      ) : (
        <p>Dirección incorrecta. </p>
      )}
    </>
  );
}

export default App;
