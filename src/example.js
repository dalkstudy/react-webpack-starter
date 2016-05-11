// es5 style
var React = require('react');
var ReactDOM = require('react-dom');

var Greeting = React.createClass({
  render: function () {
    return  (
      <p> Hello, Dalk Study</p>
    );
  }
});

ReactDOM.render(
  <Greeting/>,
  document.getElementById('greeting-div')
);
