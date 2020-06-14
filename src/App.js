import React from 'react';
import './App.css';
let config = require('./config');
const crypto = require("crypto-js");

class App extends React.Component {


  processJsonString(jsonString) {

    console.log(jsonString);
    const bytes = crypto.AES.decrypt(jsonString, 'secret key 123');
    console.log(bytes.toString(crypto.enc.Utf8));
    const configs = JSON.parse(bytes.toString(crypto.enc.Utf8));
    console.log(configs);

    config = configs;
    console.log(config)
  }
  componentDidMount() {
    fetch("/sample")
      .then(r => r.text())
      .then(txt => this.processJsonString(txt));

  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
        {config.config_name}
      </header>
    </div>
    );
  }
}

export default App;
