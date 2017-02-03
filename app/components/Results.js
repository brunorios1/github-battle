var React = require('react');
var PropTypes = React.PropTypes;

function dump (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function Results (props) {
  return (
    <div> {dump(props)} </div>
  );
}

module.exports = Results;
