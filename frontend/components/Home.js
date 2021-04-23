import React, { Component } from "react";
import { Link } from "react-router-dom";

import Loader from "./Loader";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.searchEL = React.createRef();

    this.state = {
      gameList: [],
      isLoading: false,
      gameName: "",
    };
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {}

  updateList(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    const search = this.searchEL.current.value;
    fetch(`http://localhost:3000/games/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        GameName: `${search}`,
      }),
    })
      .then((res) => {
        let response = res.json();
        console.log(response);
        return response;
      })
      .then((titleList) => {
        this.setState({ gameList: titleList.titles, isLoading: false });
      });
  }
  render() {
    return (
      //class for styling = className="text"
      <div>
        <h1>Bare Bones Gaming</h1>
        <hr />
        <div>
          <form onSubmit={this.updateList}>
            <input type="text" ref={this.searchEL}></input>
          </form>
          {this.state.isLoading ? (
            <div>
              <h2>
                {this.searchEL.current.value == ""
                  ? "Fetching Random Game"
                  : `Loading search results for ${this.searchEL.current.value}`}
              </h2>
              <Loader />
            </div>
          ) : (
            <ul>
              {this.state.gameList.map((game) => (
                <li>
                  <Link
                    to={`/title/${encodeURI(game.Name.split(" ").join(""))}`}
                  >
                    {game.Name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
