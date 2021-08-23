import Ask from './Ask';

const AsksList = ({ asksList }) => {
  return (
    <div className="asksList">
      {asksList
        .reduce((acc, ask) => [ask].concat(acc), [])
        .map((ask) => (
          <Ask {...ask} key={ask._id} />
        ))}
    </div>
  );
};

export default AsksList;
