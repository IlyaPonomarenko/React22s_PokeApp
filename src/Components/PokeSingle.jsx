import React from 'react';
import { Component } from 'react';

class PokeSingle extends Component {
    state = {
        data: [],
        isLoading: false,
      };
      componentDidMount() {
        this.setState({ isLoading: true });
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
        .then(res => res.json())
        .then(res => this.setState({data:res, isLoading:false}))
      }
   render(){
    if (this.state.isLoading) {
        return <p>is loading...</p>;
      }
    return(
        <div>
            <h2>{this.state.data.name}</h2>
            <img src={this.state.data.sprites?.other.home.front_default} alt="" />
        </div>
    )
   }
};

export default PokeSingle;