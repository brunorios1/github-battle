var React = require('react');

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
        CONFIRM BATTLE
      </div>
    )
  }
}

module.exports = ConfirmBattle;
