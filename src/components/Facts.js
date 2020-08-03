import React, { Component } from "react";
import API from "../utils/API";

class Facts extends Component {
  state = {
    birthdayPerson: [],
  };
  componentDidMount() {
    this.celebrateBirthday();
  }

  celebrateBirthday = () => {
    API.getRandomVillager()
      .then((res) =>
        this.setState({
          birthdayPerson: Object.values(res.data).map(function (cur) {
            let dateObj = new Date();
            return cur.birthday ===
              dateObj.getDate() + "/" + (dateObj.getMonth() + 1) ? (
              <div className="displayCard" key={cur.id}>
                <img src={cur.image_uri} alt="female villager"></img>
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

  render() {
    return (
      <div>
        <h4>Say "Happy Birthday!" to </h4>
        <div>{this.state.birthdayPerson}</div>
      </div>
    );
  }
}

export default Facts;
