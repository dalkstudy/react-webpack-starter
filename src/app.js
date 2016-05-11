var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function () {
    return {
      message: "안녕하세요.",
      is_duplicated: false
    };
  },
  onClick: function () {
    var messages = ['안녕하세요.', 'Hello!', 'Bonjour.', 'Hola','こんにちは。', '你好.'];
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    var is_duplicated = false;

    // 현재 인사말과 동일하면 "중복" 문구 추가
    if (this.state.message == randomMessage) {
      is_duplicated = true;
    }

    this.setState({ message: randomMessage, is_duplicated: is_duplicated });
  },
  render: function () {
    return (
      <div>
        <MessageView message={ this.state.message } is_duplicated={ this.state.is_duplicated } />
        <button type="button" onClick={ this.onClick }>언어 변경</button>
      </div>
    )
  }
});

var MessageView = React.createClass({
  render: function () {
    return (
      <p>{ this.props.message } { this.props.is_duplicated? "(중복)" : "" }</p>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('greeting-div')
);
