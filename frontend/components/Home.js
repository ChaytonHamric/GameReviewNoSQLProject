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
        fetch(`https://api.twitch.tv/kraken/games/top?limit=100`, {
            headers: {
                'Client-ID': 'thydkf033vi3dr59ik1zh39h2hxinp',
                'Authorization': 'Bearer evhcuu31rxfb9kxw2z62qi2o69isq9',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'GET',
            mode: 'no-cors'
        }).then(res=>res.json()).then(body =>{console.log(body)});
    };
    componentDidMount(){
        // this.loadGameTitles();
    }
    render() {
        return(
            //class for styling = className="text"
                <div>
                    <h1>Bare Bones Gaming</h1>
                    <hr />
                    <div>
                        <input type="text" ref={this.searchEL}></input>
                        <ul>
                            <li>
                                <Link to="/title?name=Fortnite">
                                    Fortnite
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )
    }
}