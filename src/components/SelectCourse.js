function SelectCourse({ handlerChange }) {
  return (
    <form>
      <select name="course" id="course" onChange={handlerChange}>
        <option value="nada" defaultValue>
          Selecciona un Curso
        </option>
        <option value="51">Matemática (51)</option>
        <option value="62">Álgebra (62)</option>
        <option value="66">Análisis Matemático (66)</option>
      </select>
    </form>
  );
}

export default SelectCourse;
