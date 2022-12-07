import { Component } from "react";
import Card from "./card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map(
          (monster) => {
            const { id } = monster;
            return (
              <div key={id}>
                <Card monster={monster} />
              </div>
            );
          },
          () => {
            console.log("it works");
          }
        )}
      </div>
    );
  }
}

export default CardList;
