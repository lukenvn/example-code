import React, { Component } from 'react';
import Modal from './Modal';
var fs = require('fs');
var data = require('./data.json')
class App extends Component {
  constructor(props) {
    super(props);
    var obj = data;
    console.log(obj.content)
    this.state = { isOpen: false, content : obj.content };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal} 
          content = {this.state.content}
          >
         
        </Modal>
      </div>
    );
  }
}

export default App;
