var React = require('react');
var PropTypes = React.PropTypes;

var Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps: function () {
    return {
      text: 'Loading',
      speed: 300
    }
  },
  getInitialState: function () {
    this.OriginalText = this.props.text;
    return {
      text: this.OriginalText
    }
  },
  componentDidMount: function () {
    var stopper = this.OriginalText + '...';
    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        this.setState({
          text: this.OriginalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed)
  },
  componentWillUnmount: function () {
    clearInterval(this.interval)
  },
  render: function () {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    )
  }
});

module.exports = Loading;
