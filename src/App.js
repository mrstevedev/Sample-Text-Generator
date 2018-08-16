import React, { Component } from 'react';
import axios from 'axios';
import Output from './Components/Output';
import Select from './Components/controls/Select';
import Text from './Components/controls/Text';
import Url from './Components/controls/Url';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      paras: 4,
      format: 'html',
      type: 'meat-and-filler',
      text: '',
      url: ''
    }
  }

  componentDidMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios.get('https://baconipsum.com/api/?type='+this.state.type+'&paras='+this.state.paras+'&format='+this.state.format)
      .then((response) => {
        console.log(response);
        this.setState({
          text: response.data
        }, () => {
          //console.log(this.state);
        });
      }).catch((err) => {
        console.log(err);
      });
  }

  toggleMeat(type){
    this.setState({
      type: type
    }, this.getSampleText);
  }

  changeParas(number){
    this.setState({
      paras: number
    }, this.getSampleText);
  }
  
  
  render() {
    return (
      <div className="App container">
      <h1>ReactJS Sample Text Generator</h1>
      <br/>
      <p>Lorem Ipsum Generator of just Meat or with Lorem Ipsum text.</p>
      <form className="form-inline">
        <div className="form-group">
        <label>Include Ipsum with your meat:</label>
        <Select value={this.state.html} onChange={this.toggleMeat.bind(this)} />
        </div>
        <div className="form-group">
        <label>Paragraphs:</label>
        <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
        </div>
        <div className="form-group">
        <label>URL:</label>
        <Url type={this.state.type} paras={this.state.paras} format={this.state.format} />
        </div>
      </form>
        <Output 
          value={this.state.text}
        />
                <p>Built with <a href="https://reactjs.org/">ReactJS</a></p>

      </div>
    );
  }
}

export default App;
