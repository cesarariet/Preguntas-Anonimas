import React from 'react';
import AskForm from './components/AskForm';
import AsksList from './components/AsksList';

import { connect } from 'react-redux';
import { getAsksAction } from './actions/asksActions';

const courses = ['51', '66', '62'];
const course = window.location.pathname.slice(1);

class App extends React.Component {
  componentDidMount() {
    if (courses.some((i) => i === course)) {
      document.title = `Preguntas de la materia código ${course}`;
      this.props.getAsksAction(course);
    } else {
      document.title = 'El codigo de materia es incorrecto';
    }
  }

  render() {
    console.log(this.props);
    return (
      <>
        {courses.every((i) => i !== course) ? (
          <h1 className="error404">Dirección incorrecta. </h1>
        ) : (
          <>
            <div className="askFom">
              <h1>Preguntas anónimas</h1>
              <p>
                Eligir actividad y/o práctica-ejercicio relacionada con la
                pregunta (si corresponde).
              </p>
              <AskForm />
              {this.props.loading === true && (
                <div className="loading">Actualizando...</div>
              )}
            </div>
            <div className="askList">
              <AsksList asksList={this.props.filteredAsks} />
            </div>
          </>
        )}
        {this.props.error !== '' && alert(this.props.error)}
      </>
    );
  }
}

function mapStateToProps(reducers) {
  return reducers.asksReducers;
}

export default connect(mapStateToProps, { getAsksAction })(App);
