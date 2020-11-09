import { Component } from 'react';
import './App.css';
import { GameField } from './components/GameField';
import { Header } from './components/Header';
import { DEFAULT_COMPLEXITY, DEFAULT_MODE, MIN_FEILD_SIZE, DEFAULT_START_TURN,
         CIRCLE_PLAYER } from './Const';
import { Field } from './data/Field';
import { State } from './components/State'

class App extends Component {
  constructor() {
    super();
    this.state = {
      complexity: DEFAULT_COMPLEXITY,
      mode: DEFAULT_MODE,
      field: new Field(),
      turn: DEFAULT_START_TURN,
      size: MIN_FEILD_SIZE
    }

    this.onComplexityChanged = this.onComplexityChanged.bind(this);
    this.onModeChanged = this.onModeChanged.bind(this);
    this.onPointClicked = this.onPointClicked.bind(this);
    this.onResetClicked = this.onResetClicked.bind(this);
    this.onSizeChanged = this.onSizeChanged.bind(this);
  }

  /**
   * Handler for complexity changing
   * @param {Event} e 
   * @param {Number} complexity 
   */
  onComplexityChanged(e, complexity) {
    this.setState({complexity});
  }

  /**
   * Handler for mode changing
   * @param {Event} e 
   * @param {Number} mode 
   */
  onModeChanged(e, mode) {
    this.setState({mode});
  }

  /**
   * Handler for field click
   * @param {Event} e 
   * @param {Number} x horizontal position
   * @param {Number} y vertical position
   */
  onPointClicked(e, x, y) {
    try {
      this.state.field.update(x, y, this.state.turn);
      this.setState({
        turn: this.state.turn === DEFAULT_START_TURN ? CIRCLE_PLAYER : DEFAULT_START_TURN
      })
    } catch(e) {
      console.error(e);
    }
  }

  /**
   * Handler for reset click
   */
  onResetClicked() {
    this.setState({
      field: new Field(this.state.size),
      turn: DEFAULT_START_TURN
    })
  }

  /**
   * Handler for size changing
   * @param {Event} e 
   * @param {Number} size 
   */
  onSizeChanged(e, size) {
    this.setState({
      size,
      field: new Field(size),
      turn: DEFAULT_START_TURN
    });
  }

  render() {
    return (
      <div className="App">
        <Header 
          className='App-header'
          complexity={this.state.complexity} 
          mode={this.state.mode}
          size={this.state.size}
          onSizeChanged={this.onSizeChanged}
          onComplexityChanged={this.onComplexityChanged}
          onModeChanged={this.onModeChanged}
        />
        <body className='App-body'>
          <State
            className='App-state'
            field={this.state.field}
            turn={this.state.turn}
            onResetClicked={this.onResetClicked}
          />
          <GameField
            field={this.state.field}
            onPointClicked={this.onPointClicked}
          />
        </body>
        
        <footer className='App-footer'>
          <h6>Eugene Novikov 2020</h6>
        </footer>
      </div>
    );
  }
}

export default App;
