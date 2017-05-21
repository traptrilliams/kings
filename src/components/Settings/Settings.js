import React from 'react';
import classes from './Settings.scss';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render () {
    return (
      <div>
        <h2 className={classes.settingsContainer}>
          Settings
        </h2>

        <div>
          <label>
            Deck
            <select
              value={this.props.settings.deckSelected.name}
              onChange={(event, value) => this.props.selectDeck(event.target.value)}>
                {Object.keys(this.props.settings.decks).map((deck, i) => {
                  const value = this.props.settings.decks[deck];
                  return <option key={i} value={value.id}>{value.name}</option>
                })}
            </select>
          </label>

          <br />

          <label>
            Cards
            <select
              value={this.props.settings.cards.map(x => x.id).indexOf(this.props.settings.cardsSelected.id)}
              onChange={(event, value) => this.props.selectCards(event.target.value)}>
              {this.props.settings.cards.map((card, i) =>
                <option key={i} value={i}>{card.name}</option>
              )}
            </select>
          </label>

          <br />

          <label>
            Table
            <select
              value={this.props.settings.table.map(x => x.id).indexOf(this.props.settings.tableSelected.id)}
              onChange={(event, value) => {
                console.log(event.target.value);
                this.props.selectTable(event.target.value);
              }}
            >
              {this.props.settings.table.map((table, i) =>
                <option key={i} value={i}>{table.name}</option>
              )}
            </select>
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              checked={this.props.settings.timer}
              onChange={() => this.props.toggleTimer()}
            />
          Timer {this.props.settings.timer ? 'on' : 'off'}
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              checked={this.props.settings.endOnLast}
              onChange={() => this.props.toggleEndOnLastKing()}
            />
            End game on last king
          </label>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: React.PropTypes.object.isRequired,
  selectCards: React.PropTypes.func.isRequired,
  selectDeck: React.PropTypes.func.isRequired,
  selectTable: React.PropTypes.func.isRequired,
  toggleTimer: React.PropTypes.func.isRequired,
  toggleEndOnLastKing: React.PropTypes.func.isRequired
}

export default Settings;
