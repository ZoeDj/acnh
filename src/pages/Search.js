import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
  state = {
    isSearchVisible: false,
    searchFemale: "",
    searchMale: "",
    searchAlligator: "",
    searchAnteater: "",
    searchBear: "",
    searchBird: "",
    searchBull: "",
    searchCat: "",
    searchChicken: "",
    searchCow: "",
    searchCub: "",
    searchDeer: "",
    searchDog: "",
    searchDuck: "",
    searchEagle: "",
    searchElephant: "",
    searchFrog: "",
    searchGoat: "",
    searchGorilla: "",
    searchHamster: "",
    searchHippo: "",
    searchHorse: "",
    searchKangaroo: "",
    searchKoala: "",
    searchLion: "",
    searchMonkey: "",
    searchMouse: "",
    searchOctopus: "",
    searchOstrich: "",
    searchPenguin: "",
    searchPig: "",
    searchRabbit: "",
    searchRhino: "",
    searchSheep: "",
    searchSquirrel: "",
    searchTiger: "",
    searchWolf: "",
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
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="female villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchMale: Object.values(res.data).map(function (cur) {
            return cur.gender === "Male" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="male villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchAlligator: Object.values(res.data).map(function (cur) {
            return cur.species === "Alligator" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="alligator villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchAnteater: Object.values(res.data).map(function (cur) {
            return cur.species === "Anteater" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="Anteater villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchBear: Object.values(res.data).map(function (cur) {
            return cur.species === "Bear" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="bear villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchBird: Object.values(res.data).map(function (cur) {
            return cur.species === "Bird" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="bird villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchBull: Object.values(res.data).map(function (cur) {
            return cur.species === "Bull" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="bull villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchCat: Object.values(res.data).map(function (cur) {
            return cur.species === "Cat" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="cat villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchChicken: Object.values(res.data).map(function (cur) {
            return cur.species === "Chicken" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="chicken villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchCow: Object.values(res.data).map(function (cur) {
            return cur.species === "Cow" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="cow villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchCub: Object.values(res.data).map(function (cur) {
            return cur.species === "Cub" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="cub villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchDeer: Object.values(res.data).map(function (cur) {
            return cur.species === "Deer" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="deer villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchDog: Object.values(res.data).map(function (cur) {
            return cur.species === "Dog" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="dog villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchDuck: Object.values(res.data).map(function (cur) {
            return cur.species === "Duck" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="duck villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchEagle: Object.values(res.data).map(function (cur) {
            return cur.species === "Eagle" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="eagle villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchElephant: Object.values(res.data).map(function (cur) {
            return cur.species === "Elephant" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="elephant villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchFrog: Object.values(res.data).map(function (cur) {
            return cur.species === "Frog" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="frog villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchGoat: Object.values(res.data).map(function (cur) {
            return cur.species === "Goat" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="goat villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchGorilla: Object.values(res.data).map(function (cur) {
            return cur.species === "Gorilla" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="gorilla villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchHamster: Object.values(res.data).map(function (cur) {
            return cur.species === "Hamster" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="hamster villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchHippo: Object.values(res.data).map(function (cur) {
            return cur.species === "Hippo" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="hippo villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchHorse: Object.values(res.data).map(function (cur) {
            return cur.species === "Horse" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="horse villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchKangaroo: Object.values(res.data).map(function (cur) {
            return cur.species === "Kangaroo" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="kangaroo villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchKoala: Object.values(res.data).map(function (cur) {
            return cur.species === "Koala" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="koala villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchLion: Object.values(res.data).map(function (cur) {
            return cur.species === "Lion" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="lion villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchMonkey: Object.values(res.data).map(function (cur) {
            return cur.species === "Monkey" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="monkey villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchMouse: Object.values(res.data).map(function (cur) {
            return cur.species === "Mouse" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="mouse villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchOctopus: Object.values(res.data).map(function (cur) {
            return cur.species === "Octopus" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="octopus villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchOstrich: Object.values(res.data).map(function (cur) {
            return cur.species === "Ostrich" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="ostrich villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchPenguin: Object.values(res.data).map(function (cur) {
            return cur.species === "Penguin" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="penguin villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchPig: Object.values(res.data).map(function (cur) {
            return cur.species === "Pig" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="pig villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchRabbit: Object.values(res.data).map(function (cur) {
            return cur.species === "Rabbit" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="rabbit villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchRhino: Object.values(res.data).map(function (cur) {
            return cur.species === "Rhino" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="rhino villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchSheep: Object.values(res.data).map(function (cur) {
            return cur.species === "Sheep" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="sheep villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchSquirrel: Object.values(res.data).map(function (cur) {
            return cur.species === "Squirrel" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="squirrel villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchTiger: Object.values(res.data).map(function (cur) {
            return cur.species === "Tiger" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="tiger villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchWolf: Object.values(res.data).map(function (cur) {
            return cur.species === "Wolf" ? (
              <div className="displayCard">
                <img src={cur.image_uri} alt="wolf villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
        })
      )
      .catch((err) => console.log(err));
  };

  toggleSearch = (className) => {
    this.setState((prevState) => ({
      isSearchVisible: !prevState.isSearchVisible,
    }));
  };

  render() {
    const { isSearchVisible } = this.state;
    return (
      <div>
        <button
          type="button"
          className="primary-button female"
          onClick={this.toggleSearch}
        >
          Female
        </button>
        <button type="button" className="primary-button male">
          Male
        </button>
        <button type="button" className="primary-button">
          Alligator
        </button>
        <button type="button" className="primary-button">
          Anteater
        </button>
        <button type="button" className="primary-button">
          Bear
        </button>
        <button type="button" className="primary-button">
          Bird
        </button>
        <button type="button" className="primary-button">
          Bull
        </button>
        <button type="button" className="primary-button">
          Cat
        </button>
        <button type="button" className="primary-button">
          Chicken
        </button>
        <button type="button" className="primary-button">
          Cow
        </button>
        <button type="button" className="primary-button">
          Cub
        </button>
        <button type="button" className="primary-button">
          Deer
        </button>
        <button type="button" className="primary-button">
          Dog
        </button>
        <button type="button" className="primary-button">
          Duck
        </button>
        <button type="button" className="primary-button">
          Eagle
        </button>
        <button type="button" className="primary-button">
          Elephant
        </button>
        <button type="button" className="primary-button">
          Frog
        </button>
        <button type="button" className="primary-button">
          Goat
        </button>
        <button type="button" className="primary-button">
          Gorilla
        </button>
        <button type="button" className="primary-button">
          Gorilla
        </button>
        <button type="button" className="primary-button">
          Hamster
        </button>
        <button type="button" className="primary-button">
          Hippo
        </button>
        <button type="button" className="primary-button">
          Horse
        </button>
        <button type="button" className="primary-button">
          Lion
        </button>
        <button type="button" className="primary-button">
          Kangaroo
        </button>
        <button type="button" className="primary-button">
          Koala
        </button>
        <button type="button" className="primary-button">
          Monkey
        </button>
        <button type="button" className="primary-button">
          Mouse
        </button>
        <button type="button" className="primary-button">
          Octopus
        </button>
        <button type="button" className="primary-button">
          Ostrich
        </button>
        <button type="button" className="primary-button">
          Penguin
        </button>
        <button type="button" className="primary-button">
          Pig
        </button>
        <button type="button" className="primary-button">
          Rabbit
        </button>
        <button type="button" className="primary-button">
          Rhino
        </button>
        <button type="button" className="primary-button">
          Sheep
        </button>
        <button type="button" className="primary-button">
          Squirrel
        </button>
        <button type="button" className="primary-button">
          Tiger
        </button>
        <button type="button" className="primary-button">
          Wolf
        </button>

        <div className={`${isSearchVisible ? "" : "hidden"}`}>
          <div className="female">
            <h2>Female</h2>
            <div>{this.state.searchFemale}</div>
          </div>
        </div>
        {/* <div className={`male search ${isSearchVisible ? "" : "hidden"}`}>
          <div className="male">
            <h2>Male</h2>
            <div>{this.state.searchMale}</div>
          </div>
        </div> */}

        {/* <div className="female">
          <h2>Female</h2>
          <div>{this.state.searchFemale}</div>
        </div> */}
        {/* <button>Male</button>
        <h2>Male</h2>
        <div>{this.state.searchMale}</div> */}
        {/* <div>{this.state.searchAlligator}</div> */}
        {/* <div>{this.state.searchAnteater}</div> */}
        {/* <div>{this.state.searchBear}</div> */}
        {/* <div>{this.state.searchBird}</div> */}
        {/* <div>{this.state.searchBull}</div> */}
        {/* <div>{this.state.searchCat}</div> */}
        {/* <div>{this.state.searchChicken}</div>
        <div>{this.state.searchCow}</div>
        <div>{this.state.searchCub}</div>
        <div>{this.state.searchDeer}</div>
        <div>{this.state.searchDog}</div>
        <div>{this.state.searchDuck}</div>
        <div>{this.state.searchEagle}</div>
        <div>{this.state.searchElephant}</div>
        <div>{this.state.searchFrog}</div>
        <div>{this.state.searchGoat}</div>
        <div>{this.state.searchGorilla}</div>
        <div>{this.state.searchHamster}</div>
        <div>{this.state.searchHippo}</div>
        <div>{this.state.searchHorse}</div>
        <div>{this.state.searchKangaroo}</div>
        <div>{this.state.searchKoala}</div>
        <div>{this.state.searchLion}</div>
        <div>{this.state.searchMonkey}</div>
        <div>{this.state.searchMouse}</div>
        <div>{this.state.searchOctopus}</div>
        <div>{this.state.searchOstrich}</div>
        <div>{this.state.searchPenguin}</div>
        <div>{this.state.searchPig}</div> */}
        {/* <div>{this.state.searchRabbit}</div> */}
        {/* <div>{this.state.searchRhino}</div> */}
        {/* <div>{this.state.searchSquirrel}</div> */}
        {/* <div>{this.state.searchTiger}</div> */}
        {/* <div>{this.state.searchWolf}</div>  */}
      </div>
    );
  }
}

export default Search;
