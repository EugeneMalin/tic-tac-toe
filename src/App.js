import { Component } from 'react';
import './App.css';
import { GameField } from './components/GameField';
import { Header } from './components/Header';
import { DEFAULT_COMPLEXITY, DEFAULT_MODE } from './Const';
import { Field } from './data/Field';



class App extends Component {
  constructor() {
    super();
    this.state = {
      complexity: DEFAULT_COMPLEXITY,
      mode: DEFAULT_MODE,
      field: new Field(),
      turn: 'cross'
    }

    this.onComplexityChanged = this.onComplexityChanged.bind(this);
    this.onModeChanged = this.onModeChanged.bind(this);
    this.onPointClicked = this.onPointClicked.bind(this);
  }

  onComplexityChanged(e, complexity) {
    this.setState({complexity});
  }

  onModeChanged(e, mode) {
    this.setState({mode});
  }

  onPointClicked(e, x, y) {
    try {
      this.state.field.update(x, y, this.state.turn);
      this.setState({
        turn: this.state.turn === 'cross' ? 'circle' : 'cross'
      })
    } catch(e) {
      console.error(e);
    }
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
        <GameField
          field={this.state.field}
          onPointClicked={this.onPointClicked}
        />
        <footer className='App-footer'>
          <h6>Eugene Malin</h6>
        </footer>
      </div>
    );
  }
}

export default App;
