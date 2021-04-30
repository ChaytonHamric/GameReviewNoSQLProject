import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png"
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
    fetch(`http://localhost:3000/games/`, {
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
      });
  }
  render() {
    return (
      //class for styling = className="text"
      <div className="container-mine">
        <div className="logo-containter">
          {/* <center> */}
          <img src={Logo} className="title-name" />
          {/* </center> */}
        </div>
        <div className="container container-2">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <form onSubmit={this.updateList}>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control search-bar"
                    ref={this.searchEL}
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-primary search-button"
                      type="submit"
                      value="submit"
                    >
                      Search
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          {this.state.isLoading ? (
            <div>
              <h2 style={{ textAlign: "center", color: "#f2a365" }}>
                {this.searchEL.current.value == ""
                  ? "Fetching Random Game"
                  : `Loading search results for ${this.searchEL.current.value}`}

                <Loader />
              </h2>
            </div>
          ) : (
            <div className="container">
              <ul className="list-group text-center review-list-hp">
                {this.state.gameList.map((game) => (
                  <Link
                    className="review-list-item"
                    onClick={() => this.props.setCache(game.Name)}
                    to={`/title/${encodeURI(game.Name)}`}
                  >
                    <li className="list-review">{game.Name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
