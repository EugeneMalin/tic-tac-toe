import { Component } from 'react';
import './App.css';
import { GameField } from './components/GameField';
import { Header } from './components/Header';
import { PlayerSelect } from './components/PlayerSelect';
import { State } from './components/State'
import { MULTI_MODE, SELF_TURN_DELAY } from './Const';
import { Game } from './data/Game';

class App extends Component {
  constructor() {
    super();
    this.state = {
      game: new Game()
    }

    this.onComplexityChanged = this.onComplexityChanged.bind(this);
    this.onModeChanged = this.onModeChanged.bind(this);
    this.onPointClicked = this.onPointClicked.bind(this);
    this.onResetClicked = this.onResetClicked.bind(this);
    this.onSizeChanged = this.onSizeChanged.bind(this);
    this.onRowSizeChanged = this.onRowSizeChanged.bind(this);
    this.onStartClicked = this.onStartClicked.bind(this);
    this.onStopClicked = this.onStopClicked.bind(this);
    this.onPlayersUpdated = this.onPlayersUpdated.bind(this);
  }

  componentDidUpdate() {
    const {game} = this.state;
    if (game.isActive() && game.isSelfTurn()) {
      try {
        setTimeout(() => {
          this.setState({
            game: game.selfTurn()
          });
        }, SELF_TURN_DELAY);
      } catch(e) {
        console.error(e);
      }
    }
  }

  render() {
    const {game} = this.state;
    const players = game.getMode() !== MULTI_MODE && !game.isActive() ? <PlayerSelect
              className="App-players"
              players={game.getPlayers()}
              onPlayersUpdated={this.onPlayersUpdated}
            /> : null;
    return (
      <div className="App">
        <Header 
          className='App-header'
          mode={game.getMode()}
          size={game.getFieldSize()}
          rowsize={game.getFieldRowSize()}
          complexity={game.getComplexity()} 
          disabled={game.isActive()}

          onSizeChanged={this.onSizeChanged}
          onRowSizeChanged={this.onRowSizeChanged}
          onComplexityChanged={this.onComplexityChanged}
          onModeChanged={this.onModeChanged}
        />
        <body className='App-body'>
          <State
            className='App-state'
            active={!game.isEnds()}
            clear={game.isStarts()}
            winner={game.getWinnerPlayer()}
            player={game.getCurrentPlayer()}
          />
          <div className='App-gameField'>
            <GameField
              available={game.isActive()}
              start={game.isStarts()}
              field={game.getField()}
              onStopClicked={this.onStopClicked}
              onStartClicked={this.onStartClicked}
              onRestartClicked={this.onResetClicked}
              onPointClicked={this.onPointClicked}
            />
            {players}
          </div>
        </body>
        
        <footer className='App-footer'>
          <h6>Eugene Novikov 2020</h6>
        </footer>
      </div>
    );
  }

  /**
   * Handler for row of units
   * @param {Event} e 
   * @param {Number} rowSize number of units
   */
  onRowSizeChanged(e, rowSize) {
    this.setState({
      game: this.state.game.updateField({rowSize})
    })
  }

  /**
   * Handler for complexity changing
   * @param {Event} e 
   * @param {Number} complexity 
   */
  onComplexityChanged(e, complexity) {
    this.setState({game: this.state.game.updateComplexity(complexity)});
  }

  /**
   * Handler for mode changing
   * @param {Event} e 
   * @param {Number} mode 
   */
  onModeChanged(e, mode) {
    this.setState({game: this.state.game.updateMode(mode)});
  }

  /**
   * Handler for field click
   * @param {Event} e 
   * @param {Number} x horizontal position
   * @param {Number} y vertical position
   */
  onPointClicked(e, x, y) {
    if (this.state.game.isSelfTurn()) {
      return;
    }
    try {
      this.setState({
        field: this.state.game.turn(x, y)
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
      game: this.state.game.refresh().start()
    })
  }

  /**
   * Handler for start button click
   */
  onStartClicked() {
    this.setState({
      game: this.state.game.start()
    })
  }

  /**
   * Handler for stop button click
   */
  onStopClicked() {
    this.setState({
      game: this.state.game.refresh()
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
      game: this.state.game.updateField({size, rowSize})
    });
  }

  /**
   * Handler for players update
   * @param {Players[]} players new players
   */
  onPlayersUpdated(players) {
    this.setState({
      game: this.state.game.updatePlayers(players)
    })
  }
}

export default App;
