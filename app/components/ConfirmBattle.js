var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetails = require('./UserDetails');

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
      <div className="jumbotron col-sm-12 text-center">
        <h1>Confirm Players</h1>
        <div className="row">
          <div className="col-sm-6">
            Player 1
            <UserDetails info={props.playersInfo[0]} />
          </div>
          <div className="col-sm-6">
            Player 2
            <UserDetails info={props.playersInfo[1]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div>
              <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>Initiate Battle</button>
            </div>
            <div>
              <Link to='/playerOne'>
                <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
