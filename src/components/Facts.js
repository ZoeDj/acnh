import React from "react";
import bday from "../bday.json";

class VillagerBirthdays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      villagers: [],
      birthdaysToday: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.loadVillagers();
  }

  async loadVillagers() {
    // get today's date
    const today = new Date();
    const month = today.toLocaleString("en-US", { month: "long" });
    const day = today.getDate();

    const villagersData = bday;
    // Loop through and grab name and birthday
    villagersData.forEach((villager) => {
      const name = villager.name;
      const birthday = villager.birthday;

      console.log(`${name} — ${birthday}`);

      const birthdaysToday = villagersData.filter(
        (villager) =>
          villager.birthday.includes(month) && villager.birthday.includes(day)
      );
      console.log(birthdaysToday);

      this.setState({
        villagers: bday,
        birthdaysToday,
        loading: false,
      });
    });
  }

  render() {
    const { loading, birthdaysToday } = this.state;

    if (loading) return <p>Loading villagers...</p>;
    else {
      return (
        <div className="p-4">
          <h2>
            <span role="img" aria-label="accessible-emoji">
              🎂
            </span>{" "}
            Villager Birthdays Today
          </h2>

          {birthdaysToday.length > 0 ? (
            <ul>
              {birthdaysToday.map((v) => (
                <li key={v.name}>
                  <strong>{v.name}</strong> — {v.birthday}
                </li>
              ))}
            </ul>
          ) : (
            <p>No villager birthdays today.</p>
          )}
        </div>
      );
    }
  }
}

export default VillagerBirthdays;
