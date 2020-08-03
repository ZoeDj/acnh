import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
  state = {
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
    active: false,
    active1: false,
    active2: false,
    active3: false,
    active4: false,
    active5: false,
    active6: false,
    active7: false,
    active8: false,
    active9: false,
    active10: false,
    active11: false,
    active12: false,
    active13: false,
    active14: false,
    active15: false,
    active16: false,
    active17: false,
    active18: false,
    active19: false,
    active20: false,
    active21: false,
    active22: false,
    active23: false,
    active24: false,
    active25: false,
    active26: false,
    active27: false,
    active28: false,
    active29: false,
    active30: false,
    active31: false,
    active32: false,
    active33: false,
    active34: false,
    active35: false,
    active36: false,
    active37: false,
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
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="alligator villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchAnteater: Object.values(res.data).map(function (cur) {
            return cur.species === "Anteater" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="Anteater villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchBear: Object.values(res.data).map(function (cur) {
            return cur.species === "Bear" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="bear villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchBird: Object.values(res.data).map(function (cur) {
            return cur.species === "Bird" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="bird villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchBull: Object.values(res.data).map(function (cur) {
            return cur.species === "Bull" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="bull villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchCat: Object.values(res.data).map(function (cur) {
            return cur.species === "Cat" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="cat villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchChicken: Object.values(res.data).map(function (cur) {
            return cur.species === "Chicken" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="chicken villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchCow: Object.values(res.data).map(function (cur) {
            return cur.species === "Cow" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="cow villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchCub: Object.values(res.data).map(function (cur) {
            return cur.species === "Cub" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="cub villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchDeer: Object.values(res.data).map(function (cur) {
            return cur.species === "Deer" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="deer villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchDog: Object.values(res.data).map(function (cur) {
            return cur.species === "Dog" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="dog villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchDuck: Object.values(res.data).map(function (cur) {
            return cur.species === "Duck" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="duck villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchEagle: Object.values(res.data).map(function (cur) {
            return cur.species === "Eagle" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="eagle villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchElephant: Object.values(res.data).map(function (cur) {
            return cur.species === "Elephant" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="elephant villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchFrog: Object.values(res.data).map(function (cur) {
            return cur.species === "Frog" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="frog villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchGoat: Object.values(res.data).map(function (cur) {
            return cur.species === "Goat" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="goat villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchGorilla: Object.values(res.data).map(function (cur) {
            return cur.species === "Gorilla" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="gorilla villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchHamster: Object.values(res.data).map(function (cur) {
            return cur.species === "Hamster" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="hamster villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchHippo: Object.values(res.data).map(function (cur) {
            return cur.species === "Hippo" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="hippo villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchHorse: Object.values(res.data).map(function (cur) {
            return cur.species === "Horse" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="horse villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchKangaroo: Object.values(res.data).map(function (cur) {
            return cur.species === "Kangaroo" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="kangaroo villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchKoala: Object.values(res.data).map(function (cur) {
            return cur.species === "Koala" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="koala villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchLion: Object.values(res.data).map(function (cur) {
            return cur.species === "Lion" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="lion villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchMonkey: Object.values(res.data).map(function (cur) {
            return cur.species === "Monkey" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="monkey villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchMouse: Object.values(res.data).map(function (cur) {
            return cur.species === "Mouse" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="mouse villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchOctopus: Object.values(res.data).map(function (cur) {
            return cur.species === "Octopus" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="octopus villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchOstrich: Object.values(res.data).map(function (cur) {
            return cur.species === "Ostrich" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="ostrich villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchPenguin: Object.values(res.data).map(function (cur) {
            return cur.species === "Penguin" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="penguin villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchPig: Object.values(res.data).map(function (cur) {
            return cur.species === "Pig" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="pig villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchRabbit: Object.values(res.data).map(function (cur) {
            return cur.species === "Rabbit" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="rabbit villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchRhino: Object.values(res.data).map(function (cur) {
            return cur.species === "Rhino" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="rhino villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchSheep: Object.values(res.data).map(function (cur) {
            return cur.species === "Sheep" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="sheep villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchSquirrel: Object.values(res.data).map(function (cur) {
            return cur.species === "Squirrel" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="squirrel villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchTiger: Object.values(res.data).map(function (cur) {
            return cur.species === "Tiger" ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="tiger villager"></img>
                <p>{cur.name[`name-USen`]}</p>
              </div>
            ) : (
              ""
            );
          }),
          searchWolf: Object.values(res.data).map(function (cur) {
            return cur.species === "Wolf" ? (
              <div className="displayCard" key={cur.id}>
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

  toggleFemaleSearch = () => {
    this.setState((prevState) => ({
      isFemaleSearchVisible: !prevState.isFemaleSearchVisible,
    }));
  };
  toggleMaleSearch = () => {
    this.setState((prevState) => ({
      isMaleSearchVisible: !prevState.isMaleSearchVisible,
    }));
  };
  toggleAlligatorSearch = () => {
    this.setState((prevState) => ({
      isAlligatorSearchVisible: !prevState.isAlligatorSearchVisible,
    }));
  };
  toggleAnteaterSearch = () => {
    this.setState((prevState) => ({
      isAnteaterSearchVisible: !prevState.isAnteaterSearchVisible,
    }));
  };
  toggleBearSearch = () => {
    this.setState((prevState) => ({
      isBearSearchVisible: !prevState.isBearSearchVisible,
    }));
  };
  toggleBirdSearch = () => {
    this.setState((prevState) => ({
      isBirdSearchVisible: !prevState.isBirdSearchVisible,
    }));
  };
  toggleBullSearch = () => {
    this.setState((prevState) => ({
      isBullSearchVisible: !prevState.isBullSearchVisible,
    }));
  };
  toggleCatSearch = () => {
    this.setState((prevState) => ({
      isCatSearchVisible: !prevState.isCatSearchVisible,
    }));
  };
  toggleChickenSearch = () => {
    this.setState((prevState) => ({
      isChickenSearchVisible: !prevState.isChickenSearchVisible,
    }));
  };
  toggleCowSearch = () => {
    this.setState((prevState) => ({
      isCowSearchVisible: !prevState.isCowSearchVisible,
    }));
  };
  toggleCubSearch = () => {
    this.setState((prevState) => ({
      isCubSearchVisible: !prevState.isCubSearchVisible,
    }));
  };
  toggleDeerSearch = () => {
    this.setState((prevState) => ({
      isDeerSearchVisible: !prevState.isDeerSearchVisible,
    }));
  };
  toggleDogSearch = () => {
    this.setState((prevState) => ({
      isDogSearchVisible: !prevState.isDogSearchVisible,
    }));
  };
  toggleDuckSearch = () => {
    this.setState((prevState) => ({
      isDuckSearchVisible: !prevState.isDuckSearchVisible,
    }));
  };
  toggleEagleSearch = () => {
    this.setState((prevState) => ({
      isEagleSearchVisible: !prevState.isEagleSearchVisible,
    }));
  };
  toggleElephantSearch = () => {
    this.setState((prevState) => ({
      isElephantSearchVisible: !prevState.isElephantSearchVisible,
    }));
  };
  toggleFrogSearch = () => {
    this.setState((prevState) => ({
      isFrogSearchVisible: !prevState.isFrogSearchVisible,
    }));
  };
  toggleGoatSearch = () => {
    this.setState((prevState) => ({
      isGoatSearchVisible: !prevState.isGoatSearchVisible,
    }));
  };
  toggleGorillaSearch = () => {
    this.setState((prevState) => ({
      isGorillaSearchVisible: !prevState.isGorillaSearchVisible,
    }));
  };
  toggleHamsterSearch = () => {
    this.setState((prevState) => ({
      isHamsterSearchVisible: !prevState.isHamsterSearchVisible,
    }));
  };
  toggleHippoSearch = () => {
    this.setState((prevState) => ({
      isHippoSearchVisible: !prevState.isHippoSearchVisible,
    }));
  };
  toggleHorseSearch = () => {
    this.setState((prevState) => ({
      isHorseSearchVisible: !prevState.isHorseSearchVisible,
    }));
  };
  toggleKangarooSearch = () => {
    this.setState((prevState) => ({
      isKangarooSearchVisible: !prevState.isKangarooSearchVisible,
    }));
  };
  toggleKoalaSearch = () => {
    this.setState((prevState) => ({
      isKoalaSearchVisible: !prevState.isKoalaSearchVisible,
    }));
  };
  toggleLionSearch = () => {
    this.setState((prevState) => ({
      isLionSearchVisible: !prevState.isLionSearchVisible,
    }));
  };
  toggleMonkeySearch = () => {
    this.setState((prevState) => ({
      isMonkeySearchVisible: !prevState.isMonkeySearchVisible,
    }));
  };
  toggleMouseSearch = () => {
    this.setState((prevState) => ({
      isMouseSearchVisible: !prevState.isMouseSearchVisible,
    }));
  };
  toggleOctopusSearch = () => {
    this.setState((prevState) => ({
      isOctopusSearchVisible: !prevState.isOctopusSearchVisible,
    }));
  };
  toggleOstrichSearch = () => {
    this.setState((prevState) => ({
      isOstrichSearchVisible: !prevState.isOstrichSearchVisible,
    }));
  };
  togglePenguinSearch = () => {
    this.setState((prevState) => ({
      isPenguinSearchVisible: !prevState.isPenguinSearchVisible,
    }));
  };
  togglePigSearch = () => {
    this.setState((prevState) => ({
      isPigSearchVisible: !prevState.isPigSearchVisible,
    }));
  };
  toggleRabbitSearch = () => {
    this.setState((prevState) => ({
      isRabbitSearchVisible: !prevState.isRabbitSearchVisible,
    }));
  };
  toggleRhinoSearch = () => {
    this.setState((prevState) => ({
      isRhinoSearchVisible: !prevState.isRhinoSearchVisible,
    }));
  };
  toggleSheepSearch = () => {
    this.setState((prevState) => ({
      isSheepSearchVisible: !prevState.isSheepSearchVisible,
    }));
  };
  toggleSquirrelSearch = () => {
    this.setState((prevState) => ({
      isSquirrelSearchVisible: !prevState.isSquirrelSearchVisible,
    }));
  };
  toggleTigerSearch = () => {
    this.setState((prevState) => ({
      isTigerSearchVisible: !prevState.isTigerSearchVisible,
    }));
  };
  toggleWolfSearch = () => {
    this.setState((prevState) => ({
      isWolfSearchVisible: !prevState.isWolfSearchVisible,
    }));
  };

  render() {
    const { isFemaleSearchVisible } = this.state;
    const { isMaleSearchVisible } = this.state;
    const { isAlligatorSearchVisible } = this.state;
    const { isAnteaterSearchVisible } = this.state;
    const { isBearSearchVisible } = this.state;
    const { isBirdSearchVisible } = this.state;
    const { isBullSearchVisible } = this.state;
    const { isCatSearchVisible } = this.state;
    const { isChickenSearchVisible } = this.state;
    const { isCowSearchVisible } = this.state;
    const { isCubSearchVisible } = this.state;
    const { isDeerSearchVisible } = this.state;
    const { isDogSearchVisible } = this.state;
    const { isDuckSearchVisible } = this.state;
    const { isEagleSearchVisible } = this.state;
    const { isElephantSearchVisible } = this.state;
    const { isFrogSearchVisible } = this.state;
    const { isGoatSearchVisible } = this.state;
    const { isGorillaSearchVisible } = this.state;
    const { isHamsterSearchVisible } = this.state;
    const { isHippoSearchVisible } = this.state;
    const { isHorseSearchVisible } = this.state;
    const { isKangarooSearchVisible } = this.state;
    const { isKoalaSearchVisible } = this.state;
    const { isLionSearchVisible } = this.state;
    const { isMonkeySearchVisible } = this.state;
    const { isMouseSearchVisible } = this.state;
    const { isOctopusSearchVisible } = this.state;
    const { isOstrichSearchVisible } = this.state;
    const { isPenguinSearchVisible } = this.state;
    const { isPigSearchVisible } = this.state;
    const { isRabbitSearchVisible } = this.state;
    const { isRhinoSearchVisible } = this.state;
    const { isSheepSearchVisible } = this.state;
    const { isSquirrelSearchVisible } = this.state;
    const { isTigerSearchVisible } = this.state;
    const { isWolfSearchVisible } = this.state;

    return (
      <div>
        <button
          type="button"
          className={this.state.active ? "active" : ""}
          onClick={() => {
            this.toggleFemaleSearch();
            this.setState({ active: !this.state.active });
          }}
        >
          Female
        </button>

        <button
          type="button"
          className={this.state.active1 ? "active1" : ""}
          onClick={() => {
            this.toggleMaleSearch();
            this.setState({ active1: !this.state.active1 });
          }}
        >
          Male
        </button>
        <button
          type="button"
          className={this.state.active2 ? "active2 animal" : "animal"}
          onClick={() => {
            this.toggleAlligatorSearch();
            this.setState({ active2: !this.state.active2 });
          }}
        >
          Alligator
        </button>
        <button
          type="button"
          className={this.state.active3 ? "active3 animal" : "animal"}
          onClick={() => {
            this.toggleAnteaterSearch();
            this.setState({ active3: !this.state.active3 });
          }}
        >
          Anteater
        </button>
        <button
          type="button"
          className={this.state.active4 ? "active4 animal" : "animal"}
          onClick={() => {
            this.toggleBearSearch();
            this.setState({ active4: !this.state.active4 });
          }}
        >
          Bear
        </button>
        <button
          type="button"
          className={this.state.active5 ? "active5 animal" : "animal"}
          onClick={() => {
            this.toggleBirdSearch();
            this.setState({ active5: !this.state.active5 });
          }}
        >
          Bird
        </button>
        <button
          type="button"
          className={this.state.active6 ? "active6 animal" : "animal"}
          onClick={() => {
            this.toggleBullSearch();
            this.setState({ active6: !this.state.active6 });
          }}
        >
          Bull
        </button>
        <button
          type="button"
          className={this.state.active7 ? "active7 animal" : "animal"}
          onClick={() => {
            this.toggleCatSearch();
            this.setState({ active7: !this.state.active7 });
          }}
        >
          Cat
        </button>
        <button
          type="button"
          className={this.state.active8 ? "active8 animal" : "animal"}
          onClick={() => {
            this.toggleChickenSearch();
            this.setState({ active8: !this.state.active8 });
          }}
        >
          Chicken
        </button>
        <button
          type="button"
          className={this.state.active9 ? "active9 animal" : "animal"}
          onClick={() => {
            this.toggleCowSearch();
            this.setState({ active9: !this.state.active9 });
          }}
        >
          Cow
        </button>
        <button
          type="button"
          className={this.state.active10 ? "active10 animal" : "animal"}
          onClick={() => {
            this.toggleCubSearch();
            this.setState({ active10: !this.state.active10 });
          }}
        >
          Cub
        </button>
        <button
          type="button"
          className={this.state.active11 ? "active11 animal" : "animal"}
          onClick={() => {
            this.toggleDeerSearch();
            this.setState({ active11: !this.state.active11 });
          }}
        >
          Deer
        </button>
        <button
          type="button"
          className={this.state.active12 ? "active12 animal" : "animal"}
          onClick={() => {
            this.toggleDogSearch();
            this.setState({ active12: !this.state.active12 });
          }}
        >
          Dog
        </button>
        <button
          type="button"
          className={this.state.active13 ? "active13 animal" : "animal"}
          onClick={() => {
            this.toggleDuckSearch();
            this.setState({ active13: !this.state.active13 });
          }}
        >
          Duck
        </button>
        <button
          type="button"
          className={this.state.active14 ? "active14 animal" : "animal"}
          onClick={() => {
            this.toggleEagleSearch();
            this.setState({ active14: !this.state.active14 });
          }}
        >
          Eagle
        </button>
        <button
          type="button"
          className={this.state.active15 ? "active15 animal" : "animal"}
          onClick={() => {
            this.toggleElephantSearch();
            this.setState({ active15: !this.state.active15 });
          }}
        >
          Elephant
        </button>
        <button
          type="button"
          className={this.state.active16 ? "active16 animal" : "animal"}
          onClick={() => {
            this.toggleFrogSearch();
            this.setState({ active16: !this.state.active16 });
          }}
        >
          Frog
        </button>
        <button
          type="button"
          className={this.state.active17 ? "active17 animal" : "animal"}
          onClick={() => {
            this.toggleGoatSearch();
            this.setState({ active17: !this.state.active17 });
          }}
        >
          Goat
        </button>
        <button
          type="button"
          className={this.state.active18 ? "active18 animal" : "animal"}
          onClick={() => {
            this.toggleGorillaSearch();
            this.setState({ active18: !this.state.active18 });
          }}
        >
          Gorilla
        </button>
        <button
          type="button"
          className={this.state.active19 ? "active19 animal" : "animal"}
          onClick={() => {
            this.toggleHamsterSearch();
            this.setState({ active19: !this.state.active19 });
          }}
        >
          Hamster
        </button>
        <button
          type="button"
          className={this.state.active20 ? "active20 animal" : "animal"}
          onClick={() => {
            this.toggleHippoSearch();
            this.setState({ active20: !this.state.active20 });
          }}
        >
          Hippo
        </button>
        <button
          type="button"
          className={this.state.active21 ? "active21 animal" : "animal"}
          onClick={() => {
            this.toggleHorseSearch();
            this.setState({ active21: !this.state.active21 });
          }}
        >
          Horse
        </button>
        <button
          type="button"
          className={this.state.active22 ? "active22 animal" : "animal"}
          onClick={() => {
            this.toggleKangarooSearch();
            this.setState({ active22: !this.state.active22 });
          }}
        >
          Kangaroo
        </button>
        <button
          type="button"
          className={this.state.active23 ? "active23 animal" : "animal"}
          onClick={() => {
            this.toggleKoalaSearch();
            this.setState({ active23: !this.state.active23 });
          }}
        >
          Koala
        </button>
        <button
          type="button"
          className={this.state.active24 ? "active24 animal" : "animal"}
          onClick={() => {
            this.toggleLionSearch();
            this.setState({ active24: !this.state.active24 });
          }}
        >
          Lion
        </button>
        <button
          type="button"
          className={this.state.active25 ? "active25 animal" : "animal"}
          onClick={() => {
            this.toggleMonkeySearch();
            this.setState({ active25: !this.state.active25 });
          }}
        >
          Monkey
        </button>
        <button
          type="button"
          className={this.state.active26 ? "active26 animal" : "animal"}
          onClick={() => {
            this.toggleMouseSearch();
            this.setState({ active26: !this.state.active26 });
          }}
        >
          Mouse
        </button>
        <button
          type="button"
          className={this.state.active27 ? "active27 animal" : "animal"}
          onClick={() => {
            this.toggleOctopusSearch();
            this.setState({ active27: !this.state.active27 });
          }}
        >
          Octopus
        </button>
        <button
          type="button"
          className={this.state.active28 ? "active28 animal" : "animal"}
          onClick={() => {
            this.toggleOstrichSearch();
            this.setState({ active28: !this.state.active28 });
          }}
        >
          Ostrich
        </button>
        <button
          type="button"
          className={this.state.active29 ? "active29 animal" : "animal"}
          onClick={() => {
            this.togglePenguinSearch();
            this.setState({ active29: !this.state.active29 });
          }}
        >
          Penguin
        </button>
        <button
          type="button"
          className={this.state.active30 ? "active30 animal" : "animal"}
          onClick={() => {
            this.togglePigSearch();
            this.setState({ active30: !this.state.active30 });
          }}
        >
          Pig
        </button>
        <button
          type="button"
          className={this.state.active31 ? "active31 animal" : "animal"}
          onClick={() => {
            this.toggleRabbitSearch();
            this.setState({ active31: !this.state.active31 });
          }}
        >
          Rabbit
        </button>
        <button
          type="button"
          className={this.state.active32 ? "active32 animal" : "animal"}
          onClick={() => {
            this.toggleRhinoSearch();
            this.setState({ active32: !this.state.active32 });
          }}
        >
          Rhino
        </button>
        <button
          type="button"
          className={this.state.active33 ? "active33 animal" : "animal"}
          onClick={() => {
            this.toggleSheepSearch();
            this.setState({ active33: !this.state.active33 });
          }}
        >
          Sheep
        </button>
        <button
          type="button"
          className={this.state.active34 ? "active34 animal" : "animal"}
          onClick={() => {
            this.toggleSquirrelSearch();
            this.setState({ active34: !this.state.active34 });
          }}
        >
          Squirrel
        </button>
        <button
          type="button"
          className={this.state.active35 ? "active35 animal" : "animal"}
          onClick={() => {
            this.toggleTigerSearch();
            this.setState({ active35: !this.state.active35 });
          }}
        >
          Tiger
        </button>
        <button
          type="button"
          className={this.state.active36 ? "active36 animal" : "animal"}
          onClick={() => {
            this.toggleWolfSearch();
            this.setState({ active36: !this.state.active36 });
          }}
        >
          Wolf
        </button>
        <div className={`${isFemaleSearchVisible ? "" : "hidden"}`}>
          <div className="display female">
            <h2>Female</h2>
            <div>{this.state.searchFemale}</div>
          </div>
        </div>
        <div className={` ${isMaleSearchVisible ? "" : "hidden"}`}>
          <div className="display male">
            <h2>Male</h2>
            <div>{this.state.searchMale}</div>
          </div>
        </div>
        <div className={`${isAlligatorSearchVisible ? "" : "hidden"}`}>
          <div className="display alligator">
            <h2>Alligator</h2>
            <div>{this.state.searchAlligator}</div>
          </div>
        </div>
        <div className={`${isAnteaterSearchVisible ? "" : "hidden"}`}>
          <div className="display anteater">
            <h2>Anteater</h2>
            <div>{this.state.searchAnteater}</div>
          </div>
        </div>
        <div className={`${isBearSearchVisible ? "" : "hidden"}`}>
          <div className="display bear">
            <h2>Bear</h2>
            <div>{this.state.searchBear}</div>
          </div>
        </div>
        <div className={`${isBirdSearchVisible ? "" : "hidden"}`}>
          <div className="display bird">
            <h2>Bird</h2>
            <div>{this.state.searchBird}</div>
          </div>
        </div>
        <div className={`${isBullSearchVisible ? "" : "hidden"}`}>
          <div className="display bull">
            <h2>Bull</h2>
            <div>{this.state.searchBull}</div>
          </div>
        </div>
        <div className={`${isCatSearchVisible ? "" : "hidden"}`}>
          <div className="display cat">
            <h2>Cat</h2>
            <div>{this.state.searchCat}</div>
          </div>
        </div>
        <div className={`${isChickenSearchVisible ? "" : "hidden"}`}>
          <div className="display chicken">
            <h2>Chicken</h2>
            <div>{this.state.searchChicken}</div>
          </div>
        </div>
        <div className={`${isCowSearchVisible ? "" : "hidden"}`}>
          <div className="display cow">
            <h2>Cow</h2>
            <div>{this.state.searchCow}</div>
          </div>
        </div>
        <div className={`${isCubSearchVisible ? "" : "hidden"}`}>
          <div className="display cub">
            <h2>Cub</h2>
            <div>{this.state.searchCub}</div>
          </div>
        </div>
        <div className={`${isDeerSearchVisible ? "" : "hidden"}`}>
          <div className="display deer">
            <h2>Deer</h2>
            <div>{this.state.searchDeer}</div>
          </div>
        </div>
        <div className={`${isDogSearchVisible ? "" : "hidden"}`}>
          <div className="display dog">
            <h2>Dog</h2>
            <div>{this.state.searchDog}</div>
          </div>
        </div>
        <div className={`${isDuckSearchVisible ? "" : "hidden"}`}>
          <div className="display duck">
            <h2>Duck</h2>
            <div>{this.state.searchDuck}</div>
          </div>
        </div>
        <div className={`${isEagleSearchVisible ? "" : "hidden"}`}>
          <div className="display eagle">
            <h2>Eagle</h2>
            <div>{this.state.searchEagle}</div>
          </div>
        </div>
        <div className={`${isElephantSearchVisible ? "" : "hidden"}`}>
          <div className="display elephant">
            <h2>Elephant</h2>
            <div>{this.state.searchElephant}</div>
          </div>
        </div>
        <div className={`${isFrogSearchVisible ? "" : "hidden"}`}>
          <div className="display frog">
            <h2>Frog</h2>
            <div>{this.state.searchFrog}</div>
          </div>
        </div>
        <div className={`${isGoatSearchVisible ? "" : "hidden"}`}>
          <div className="display goat">
            <h2>Goat</h2>
            <div>{this.state.searchGoat}</div>
          </div>
        </div>
        <div className={`${isGorillaSearchVisible ? "" : "hidden"}`}>
          <div className="display gorilla">
            <h2>Gorilla</h2>
            <div>{this.state.searchGorilla}</div>
          </div>
        </div>
        <div className={`${isHamsterSearchVisible ? "" : "hidden"}`}>
          <div className="display hamster">
            <h2>Hamster</h2>
            <div>{this.state.searchHamster}</div>
          </div>
        </div>
        <div className={`${isHippoSearchVisible ? "" : "hidden"}`}>
          <div className="display hippo">
            <h2>Hippo</h2>
            <div>{this.state.searchHippo}</div>
          </div>
        </div>
        <div className={`${isHorseSearchVisible ? "" : "hidden"}`}>
          <div className="display horse">
            <h2>Horse</h2>
            <div>{this.state.searchHorse}</div>
          </div>
        </div>
        <div className={`${isKangarooSearchVisible ? "" : "hidden"}`}>
          <div className="display kangaroo">
            <h2>Kangaroo</h2>
            <div>{this.state.searchKangaroo}</div>
          </div>
        </div>
        <div className={`${isKoalaSearchVisible ? "" : "hidden"}`}>
          <div className="display koala">
            <h2>Koala</h2>
            <div>{this.state.searchKoala}</div>
          </div>
        </div>
        <div className={`${isLionSearchVisible ? "" : "hidden"}`}>
          <div className="display lion">
            <h2>Lion</h2>
            <div>{this.state.searchLion}</div>
          </div>
        </div>
        <div className={`${isMonkeySearchVisible ? "" : "hidden"}`}>
          <div className="display gorilla">
            <h2>Monkey</h2>
            <div>{this.state.searchMonkey}</div>
          </div>
        </div>
        <div className={`${isMouseSearchVisible ? "" : "hidden"}`}>
          <div className="display mouse">
            <h2>Mouse</h2>
            <div>{this.state.searchMouse}</div>
          </div>
        </div>
        <div className={`${isOctopusSearchVisible ? "" : "hidden"}`}>
          <div className="display octopus">
            <h2>Octopus</h2>
            <div>{this.state.searchOctopus}</div>
          </div>
        </div>
        <div className={`${isOstrichSearchVisible ? "" : "hidden"}`}>
          <div className="display ostrich">
            <h2>Ostrich</h2>
            <div>{this.state.searchOstrich}</div>
          </div>
        </div>
        <div className={`${isPenguinSearchVisible ? "" : "hidden"}`}>
          <div className="display penguin">
            <h2>Penguin</h2>
            <div>{this.state.searchPenguin}</div>
          </div>
        </div>
        <div className={`${isPigSearchVisible ? "" : "hidden"}`}>
          <div className="display pig">
            <h2>Pig</h2>
            <div>{this.state.searchPig}</div>
          </div>
        </div>
        <div className={`${isRabbitSearchVisible ? "" : "hidden"}`}>
          <div className="display rabbit">
            <h2>Rabbit</h2>
            <div>{this.state.searchRabbit}</div>
          </div>
        </div>
        <div className={`${isRhinoSearchVisible ? "" : "hidden"}`}>
          <div className="display rhino">
            <h2>Rhino</h2>
            <div>{this.state.searchRhino}</div>
          </div>
        </div>
        <div className={`${isSheepSearchVisible ? "" : "hidden"}`}>
          <div className="display sheep">
            <h2>Sheep</h2>
            <div>{this.state.searchSheep}</div>
          </div>
        </div>
        <div className={`${isSquirrelSearchVisible ? "" : "hidden"}`}>
          <div className="display squirrel">
            <h2>Squirrel</h2>
            <div>{this.state.searchSquirrel}</div>
          </div>
        </div>
        <div className={`${isTigerSearchVisible ? "" : "hidden"}`}>
          <div className="display tiger">
            <h2>Tiger</h2>
            <div>{this.state.searchTiger}</div>
          </div>
        </div>
        <div className={`${isWolfSearchVisible ? "" : "hidden"}`}>
          <div className="display wolf">
            <h2>Wolf</h2>
            <div>{this.state.searchWolf}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
