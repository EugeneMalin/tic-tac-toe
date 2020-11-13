import { Component } from 'react';
import './App.css';
import { GameField } from './components/GameField';
import { Header } from './components/Header';
import { CIRCLE_PLAYER, DEFAULT_MODE, SINGLE_MODE } from './Const';
import { Field } from './data/Field';
import { State } from './components/State'
import { Engine } from './data/Engine';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: DEFAULT_MODE,
      field: new Field(),
      engine: new Engine()
    }

    this.onComplexityChanged = this.onComplexityChanged.bind(this);
    this.onModeChanged = this.onModeChanged.bind(this);
    this.onPointClicked = this.onPointClicked.bind(this);
    this.onResetClicked = this.onResetClicked.bind(this);
    this.onSizeChanged = this.onSizeChanged.bind(this);
    this.onRowSizeChanged = this.onRowSizeChanged.bind(this);
  }

  componentDidUpdate() {
    const {field, engine} = this.state;
    if (this.state.mode === SINGLE_MODE && field.turn === CIRCLE_PLAYER && field.isActive()) {
      try {
        this.setState({
          field: field.update(...engine.getPoint(field))
        });
      } catch(e) {
        console.error(e);
      }
    }
  }

  /**
   * Handler for row of units
   * @param {Event} e 
   * @param {Number} rowSize number of units
   */
  onRowSizeChanged(e, rowSize) {
    this.setState({
      field: new Field(this.state.field.size, rowSize)
    })
  }

  /**
   * Handler for complexity changing
   * @param {Event} e 
   * @param {Number} complexity 
   */
  onComplexityChanged(e, complexity) {
    this.setState({engine: this.state.engine.updateComplexity(complexity)});
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
      this.setState({
        field: this.state.field.update(x, y)
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
      field: new Field(this.state.field.size, this.state.field.rowSize)
    })
  }

  /**
   * Handler for size changing
   * @param {Event} e 
   * @param {Number} size 
   * @param {Number} rowSize
   */
  onSizeChanged(e, size, rowSize) {
    this.setState({
      field: new Field(size, rowSize)
    });
  }

  render() {
    return (
      <div className="App">
        <Header 
          className='App-header'
          mode={this.state.mode}
          size={this.state.field.size}
          rowSize={this.state.field.rowSize}
          complexity={this.state.engine.getComplexityId()} 
          disabled={!this.state.field.isClear()}
          onSizeChanged={this.onSizeChanged}
          onRowSizeChanged={this.onRowSizeChanged}
          onComplexityChanged={this.onComplexityChanged}
          onModeChanged={this.onModeChanged}
        />
        <body className='App-body'>
          <State
            className='App-state'
            field={this.state.field}
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
