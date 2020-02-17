import React from 'react';
import ResultComponent from './components/ResultComponent'
import KeypadComponent from './components/KeypadComponent'
import './App.css';

class App extends React.Component {
  state = {
    result: "" 
  }

  onClick = button => {
    if (button === "=") {
      this.calculate()
    }
    else if (button === "Clear") {
      this.clearFunction()
    }
    else {
      this.setState({
        result: this.setState.result + button
      })
    }
  }
  

  clearFunction = () => {
    this.setState({
      result: ""
    })
  }

  render() {
    return (
      <div className="background">
        <div className="calculatorBody">
          <ResultComponent result={this.state.result} />
          <KeypadComponent onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

export default App;
