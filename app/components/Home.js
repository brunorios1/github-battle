var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div className='jumbotron col-sm-12 text-center'>
          <h1>Github Battle</h1>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-success'>Get Started</button>
          </Link>
        </div>
      </div>
    )
  }
});

module.exports = Home;
