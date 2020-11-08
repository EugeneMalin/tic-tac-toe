import { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { DEFAULT_COMPLEXITY, DEFAULT_MODE } from './Const';



class App extends Component {
  constructor() {
    super();
    this.state = {
      complexity: DEFAULT_COMPLEXITY,
      mode: DEFAULT_MODE
    }

    this.onComplexityChanged = this.onComplexityChanged.bind(this);
    this.onModeChanged = this.onModeChanged.bind(this);
  }

  onComplexityChanged(e, complexity) {
    this.setState({complexity});
  }

  onModeChanged(e, mode) {
    this.setState({mode});
  }

  render() {
    return (
      <div className="App">
        <Header 
          className='App-header'
          complexity={this.state.complexity} 
          mode={this.state.mode}
          onComplexityChanged={this.onComplexityChanged}
          onModeChanged={this.onModeChanged}
        />
        <body className='App-body'>
          <div>Body {`${this.state.complexity} ${this.state.mode}`}</div>
        </body>
        <footer className='App-footer'>
          <h6>Eugene Malin</h6>
        </footer>
      </div>
    );
  }
}

export default App;
