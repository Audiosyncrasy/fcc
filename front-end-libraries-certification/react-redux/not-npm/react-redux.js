'use strict';

class DisplayMessages extends React.Component {
  constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = {
    input: "",
    messages: []
  };
  this.handleChange = this.handleChange.bind(this);
  this.submitMessage = this.submitMessage.bind(this);
}
// add handleChange() and submitMessage() methods here
handleChange() {
  console.log('Click happened');
}
  
submitMessage() {
  console.log('Message submitted');
}
  
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input />
        <button onClick={this.submitMessage}>Add message</button>
        <ul></ul>
      </div>
    );
  }
};

ReactDOM.render(<DisplayMessages />, document.getElementById('root'));