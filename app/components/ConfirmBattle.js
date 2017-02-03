var React = require('react');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  if (props.isLoading === true) {
    return (
      <div>
        IS LOADING
      </div>
    )
  } else {
    return (
      <div>
      CONFIRM BATTLE!
        {puke(props)}
      </div>
    )
  }
}

module.exports = ConfirmBattle;
