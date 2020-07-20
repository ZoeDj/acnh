import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
  state = {
    searchFemale: "",
    searchMale: "",
  };

  componentDidMount() {
    this.searchVillager();
  }
  searchVillager = () => {
    API.getRandomVillager()
      .then((res) =>
        this.setState({
          searchFemale: Object.values(res.data).map(function (cur) {
            return cur.gender === "Female" ? (
              <img src={cur.image_uri} alt="female villager"></img>
            ) : (
              ""
            );
          }),
          searchMale: Object.values(res.data).map(function (cur) {
            return cur.gender === "Male" ? (
              <img src={cur.image_uri} alt="male villager"></img>
            ) : (
              ""
            );
          }),
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h4>Search Female: {this.state.searchFemale}</h4>
        <h4>Search Male: {this.state.searchMale}</h4>
      </div>
    );
  }
}

export default Search;
