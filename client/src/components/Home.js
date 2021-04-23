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
      controller: new AbortController()
    };
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {

  }

  updateList(e) {
    this.state.controller.abort()
    e.preventDefault();
    this.setState({ isLoading: true });
    const search = this.searchEL.current.value;
    fetch(`http://157.230.63.172:3001/games/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        GameName: `${search}`,
      })
    })
      .then((res) => {
        let response = res.json();
        console.log(response);
        return response;
      })
      .then((titleList) => {
        this.setState({ gameList: titleList.titles, isLoading: false });
      }).catch(err => {});
  }
  render() {
    return (
      //class for styling = className="text"
      <div>
        <h1>Bare Bones Gaming</h1>
        <hr />
        <div className="input-group">
            <div className ="form-outline">
                    <form onSubmit={this.updateList}>
                        <input type="search" className="form-control" ref={this.searchEL}></input>
                        <label className= "form-label">Search for a game</label>
                    </form>
            </div>
        </div>
            <hr/>
            <div>
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
                        <ul className="list-group text-center">
                        {this.state.gameList.map((game) => (
                            <li className="list-group-item">
                            <Link onClick={() => this.props.setCache(game.Name)}
                                to={`/title/${encodeURI(game.Name)}`}
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
