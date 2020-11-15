import { Component } from 'react';
import './App.css';
import { GameField } from './components/GameField';
import { Header } from './components/Header';
import { DEFAULT_MODE, DEFAULT_PLAYERS, DEFAULT_PLAYERS_WITH_AI, MULTI_MODE } from './Const';
import { Field } from './data/Field';
import { State } from './components/State'
import { Engine } from './data/Engine';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: DEFAULT_MODE,
      field: new Field(),
      engine: new Engine(),
      players: DEFAULT_PLAYERS
    }

    this.onComplexityChanged = this.onComplexityChanged.bind(this);
    this.onModeChanged = this.onModeChanged.bind(this);
    this.onPointClicked = this.onPointClicked.bind(this);
    this.onResetClicked = this.onResetClicked.bind(this);
    this.onSizeChanged = this.onSizeChanged.bind(this);
    this.onRowSizeChanged = this.onRowSizeChanged.bind(this);
  }

  componentDidUpdate() {
    const {field, engine, players} = this.state;
    if (players.getCurrent().isAuto() && field.isActive()) {
      try {
        this.setState({
          field: field.update(...engine.getPoint(field), this.state.players.getActive())
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
    this.setState({
      mode,
      players: mode === MULTI_MODE ? DEFAULT_PLAYERS : DEFAULT_PLAYERS_WITH_AI
    });
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
        field: this.state.field.update(x, y, this.state.players.getActive())
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
      field: new Field(this.state.field.size, this.state.field.rowSize),
      players: this.state.mode === MULTI_MODE ? DEFAULT_PLAYERS : DEFAULT_PLAYERS_WITH_AI
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
            player={this.state.players.getActive()}
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
