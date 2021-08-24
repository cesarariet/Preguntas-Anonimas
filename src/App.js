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
      document.title = `Preguntas de la materia código ${course}`;
      getAsks(course)
        .then((res) => (asks = res))
        .then(() => setAsksFiltered(asks));
    } else {
      document.title = 'El codigo de materia es incorrecto';
    }
  }, []);

  function printAsks(event) {
    const { name, value } = event.target;
    messageAskFilter = `Filtrando preguntas por ${name} ${value}`;
    if (isNaN(parseInt(value))) {
      messageAskFilter = '';
      return setAsksFiltered(asks);
    }
    return setAsksFiltered(
      asks.filter((ask) => ask[name] === value || isNaN(parseInt(ask[name])))
    );
  }
  return (
    <>
      {courses.some((i) => i === course) ? (
        <>
          <div className="askForm">
            <h1>Preguntas anónimas</h1>
            <p>
              Elija la actividad o práctica relacionado con la pregunta (si
              corresponde).
            </p>
            <AskForm handlerChange={printAsks} />
          </div>
          <div className="askList">
            <p>{messageAskFilter}</p>
            <AsksList asksList={asksFiltered} />
          </div>
        </>
      ) : (
        <h1 className="error404">Dirección incorrecta. </h1>
      )}
    </>
  );
}

export default App;
