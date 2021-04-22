import React, { Component } from 'react'
import Home from './Home'
import Game from './Game'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
export default class App extends Component {
    render(){
        return (
            <div>
                <h2>Hello World</h2>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/title/:name" component={Game} />
                    </Switch>
                </BrowserRouter>
            </div>
            
        )
    }
}