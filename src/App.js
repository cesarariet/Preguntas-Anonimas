import { useState } from 'react';
import SelectCourse from './components/SelectCourse';
import AskForm from './components/AskForm';
import AsksList from './components/AsksList';

import { getAsks } from './api';

function App() {
  const [asks, setAsks] = useState([]);
  const [asksFiltered, setAsksFiltered] = useState([]);
  const [messageAskFilter, setMessageAskFilter] = useState('');

  async function selectCourse(event) {
    try {
      setAsks(await getAsks(event.target.value));
      return setAsksFiltered(asks);
    } catch (error) {
      console.log(error);
    }
  }

  async function printAsks(event) {
    const { name, value } = event.target;
    setMessageAskFilter(`Filtrando preguntas por ${name} ${value}`);
    if (isNaN(parseInt(value))) return setAsksFiltered(asks);
    return setAsksFiltered(
      asks.filter((ask) => ask[name] === value || isNaN(parseInt(ask[name])))
    );
  }
  async function handlerClick() {
    setMessageAskFilter('');
    return setAsksFiltered(asks);
  }
  return (
    <>
      <h1>Preguntas anónimas</h1>
      <p>
        Elija el curso, la actividad o práctica relacionado con la pregunta (si
        corresponde).
      </p>
      <SelectCourse handlerChange={selectCourse} />
      <AskForm handlerChange={printAsks} />
      <button name="resetear" onClick={handlerClick} type="button">
        Resetear
      </button>
      <p>{messageAskFilter}</p>
      <AsksList asksList={asksFiltered} />
    </>
  );
}

export default App;
