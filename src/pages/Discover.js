import React, { Component } from "react";
import API from "../utils/API";

class Discover extends Component {
  state = {
    villager: "",
    image: "",
    name: "",
  };

  componentDidMount() {
    this.randomVillager();
  }

  randomVillager = () => {
    API.getRandomVillager()
      .then((res) =>
        this.setState({
          image: Object.values(res.data)[Math.floor(Math.random() * 390)]
            .image_uri,
        })
      )

      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Make New Friends</h1>
        <h3>Thumbs up on any villager you'd like to meet!</h3>
        <img src={this.state.image} alt="villager" />
      </div>
    );
  }
}

export default Discover;
