import React, { Component } from "react";
import API from "../utils/API";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

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
    let random = [Math.floor(Math.random() * 390)];
    API.getRandomVillager(random)

      .then((res) =>
        this.setState({
          name: Object.values(res.data)[random].name[`name-USen`],
          image: Object.values(res.data)[random].image_uri,
          birthday: Object.values(res.data)[random].birthday,
          species: Object.values(res.data)[random].species,
          gender: Object.values(res.data)[random].gender,
          personality: Object.values(res.data)[random].personality,
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
        <h4>Name: {this.state.name}</h4>
        <h4>Gender: {this.state.gender}</h4>
        <h4>Species: {this.state.species}</h4>
        <h4>Birthday: {this.state.birthday}</h4>
        <h4>Personality: {this.state.personality}</h4>

        <div>
          <button className="btn-up">
            <FaThumbsUp />
          </button>
          <button className="btn-down">
            <FaThumbsDown />
          </button>
        </div>
      </div>
    );
  }
}

export default Discover;
