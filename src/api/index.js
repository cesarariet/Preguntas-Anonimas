import env from 'react-dotenv';

const API_URL = env.API_URL;

export async function getAsks(course) {
  return await fetch(`${API_URL}?course=${course}`, {
    method: 'get',
  })
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((e) => console.log('Error en getAsks......................\n' + e));
}

export async function createAsk(body) {
  try {
    await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    return alert('Pregunta creada');
  } catch (error) {
    alert('Error al crear la pregunta');
    console.log('No se pudo crear la pregunta ---------', error);
  }
}
