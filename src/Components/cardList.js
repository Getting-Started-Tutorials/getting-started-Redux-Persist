import React, { Component } from "react";
import Card from "./Card";
import shortid from "shortid";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cardList } = this.props;
    return (
      <div>
        {cardList.length > 0
          ? cardList.map(card => <Card key={shortid.generate()} {...card} />)
          : null}
      </div>
    );
  }
}

export default CardList;
