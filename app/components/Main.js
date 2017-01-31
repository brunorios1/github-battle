var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        'Hello I\'m Main'
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
