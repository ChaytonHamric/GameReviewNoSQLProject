import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Review from './Review'
export default class Home extends Component {
    
    constructor(props){
        super(props);
        this.searchEL = React.createRef();

        this.state = {
            gameList: [] 
        }
    }
    loadGameTitles(){

        fetch(`http://localhost:3000/games/`)
          .then((res) => res.json())
          .then((titleList) => {
            let titles = [];
            titleList.titles.forEach((title) => {
              titles.push(title);
            });
            return titles;
          })
          .then((titles) => this.setState({gameList: titles}))

    };
    componentDidMount(){
        this.loadGameTitles();
    }
    render() {
        return (
          //class for styling = className="text"
          <div>
            <h1>Bare Bones Gaming</h1>
            <hr />
            <div>
              <input type="text" ref={this.searchEL}></input>
              <ul>
                {this.state.gameList.map((game) => (
                  <li>
                    <Link to={`/title/${encodeURI(game.Name.split(" ").join(""))}`}>{game.Name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
}