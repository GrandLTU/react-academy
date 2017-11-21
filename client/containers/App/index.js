import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { addCard } from '../../core/modules/cards/cardsActions';

class App extends React.Component {
  constructor() {
    super();

    this.onRemoveAllCards = this.onRemoveAllCards.bind(this);

    this.state = {
      cards: [
        { value: 1 }
      ]
    };
  }
  onRemoveAllCards() {
    this.setState({
      cards: []
    })
  }
  handleClick() {
      this.props.onAddCard({ value: 1 });
  }
  render() {
    return (
      <div className="app-container">
        <div className="play-area">

          <div className="play-area-cards">
            <div className="play-area-cards__deck">
              <Card deck value={52}/>
            </div>

            <div className="play-area-cards__items">
              {this.props.main ? this.props.main.value : null}
            </div>
          </div>

          <div className="play-area__actions">
            <Button title="Add card" click={this.handleClick}/>
            <Button title="Remove cards" click={this.onRemoveAllCards}/>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  main: state.cards.getIn(['main'])
});

export default connect(
  mapStateToProps,
    { onAddCard: addCard },
)(App);

export { App as AppDisconnected };
