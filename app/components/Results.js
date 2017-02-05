var React = require('react');
var UserDetails = require('./UserDetails');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var Loading = require('./Loading');

function Results (props) {

  if (props.isLoading === true) {
    return <Loading text='One moment' speed={100} />
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <div className="jumbotron col-sm-12 text-center">
        <h1>It's a Tie!</h1>
        <div className="row">
          <div className="col-sm-12">
            <Link to="/playerOne">
              <button type="button" className="btn btn-lg btn-danger">Start Over</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <div className="jumbotron col-sm-12 text-center">
      <h1>Results</h1>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-6">
            Winner
            <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
          </div>
          <div className="col-sm-6">
            Loser
            <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Link to="/playerOne">
            <button type="button" className="btn btn-lg btn-danger">Start Over</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
