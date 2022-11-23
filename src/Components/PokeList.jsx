import React from "react";
import Card from "./Card";
import { Component } from "react";

import "./PokeList.css";

class PokeList extends Component {
  state = {
    data: [],
    isLoading: false,
  };
  
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((p) => {
          return fetch(p.url).then((res) => res.json());
        });
        Promise.all(fetches).then((res) =>
          this.setState({ data: res, isLoading: false })
        );
      });
  }
  render() {
    if (this.state.isLoading) {
      return <p>is loading...</p>;
    }
    return (
      <div className="row">
        {this.state.data.map((card) => (
          <Card key={card.name} name={card.name} image={card.sprites.other.home.front_default}/>
        ))}
      </div>
    );
  }
}

export default PokeList;
