import React, { Component } from "react";
import Axios from "axios";
import Card from "./Card";
import "./Deck.css";

const DECK_API =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

const CARD_API = "https://deckofcardsapi.com/api/deck/";

//${deck_id}/draw/

export default class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: { deck_id: "", cardsRemain: "" },
      cards: []
    };

    this.getcard = this.getcard.bind(this);
  }

  async componentDidMount() {
    const response = await Axios.get(DECK_API);

    const { deck_id, remaining } = response.data;
    this.setState({
      deck: { id: deck_id, cardsRemain: remaining }
    });
  }

  async getcard() {
    try {
      const response = await Axios.get(
        `${CARD_API}${this.state.deck.id}/draw/?count=1`
      );

      if (!response.data.success) {
        throw new Error("No Card Remaining");
      }
      this.setState(st => ({
        cards: [
          ...st.cards,
          {
            id: response.data.cards[0].code,
            image: response.data.cards[0].image
          }
        ],
        deck: {
          id: response.data.deck_id,
          cardsRemain: response.data.remaining
        }
      }));
    } catch (error) {
      alert(error);
    }

    // console.log(response);
  }
  render() {
    return (
      <div className="Deck" style={{ textAlign: "center" }}>
        <h2>Card Dealer</h2>

        <button
          disabled={this.state.deck.cardsRemain === 0 ? true : false}
          onClick={this.getcard}
        >
          Get Card
        </button>
        <div className="Deck-cards">
          {this.state.cards.map(card => {
            return <Card key={card.id} image={card} />;
          })}
        </div>
      </div>
    );
  }
}
