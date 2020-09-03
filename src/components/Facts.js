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
                <h4>Today is {cur.name[`name-USen`]}'s Birthday</h4>
                <img src={cur.image_uri} alt="villager"></img>
                <h2
                  style={{
                    color: "#f0fff5",
                    background: "#992d23",
                    borderRadius: "7px",
                    padding: "7px",
                  }}
                >
                  Happy Birthday {cur.name[`name-USen`]}!
                </h2>
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
        <div>{this.state.birthdayPerson}</div>
      </div>
    );
  }
}

export default Facts;
