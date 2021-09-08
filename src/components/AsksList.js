import Ask from './Ask';

const AsksList = ({ asksList }) => {
  return (
    <div className="asksList">
      {asksList
        .reduce((acc, ask) => [ask].concat(acc), [])
        .map((ask, index) => (
          <Ask {...ask} key={index} />
        ))}
    </div>
  );
};

export default AsksList;
