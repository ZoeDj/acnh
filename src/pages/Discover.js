import React, { Component } from "react";
import API from "../utils/API";
import {
  // FaThumbsUp,
  // FaThumbsDown,
  FaLeaf,
  // FaArrowAltCircleRight,
  // FaArrowAltCircleLeft
} from "react-icons/fa";

class Discover extends Component {
  state = {
    villager: "",
    image: "",
    name: "",
    song: "",
  };

  componentDidMount() {
    this.randomVillager();
  }

  randomVillager = () => {
    //let random = [Math.floor(Math.random() * 390)];

    API.getRandomVillager()

      .then((res) =>
        this.setState({
          name: res.data.name["US-en"],
          image: res.data.image,
          birthday: res.data.birthday,
          species: res.data.species,
          gender: res.data.gender,
          personality: res.data.personality,
          catchPhrase: res.data.saying,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Discover New Friends</h1>
        <div
          className="arrow"
          onClick={() => {
            this.randomVillager();
          }}
        >
          <FaLeaf />
        </div>

        {/* <img
          src={this.state.image}
          alt="villager"
          style={{ borderRadius: "15px" }}
        /> */}
        <h2>Say Hello to {this.state.name}</h2>
        <h3>Gender: {this.state.gender}</h3>
        <h3>Species: {this.state.species}</h3>
        <h3>Birthday: {this.state.birthday}</h3>
        <h3>Personality: {this.state.personality}</h3>
        <h3>Catch Phrase: "{this.state.catchPhrase}"</h3>
      </div>
    );
  }
}

export default Discover;
