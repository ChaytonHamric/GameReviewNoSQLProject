import React, { Component } from 'react'
import Home from './Home'
import Game from './Game'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import '../style.css'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cache: ''
    }
  }

  setCache(cacheData) {
    this.setState({ cache: cacheData })
  }

  cache() {
    return this.state.cache
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" >
              <Home setCache={this.setCache.bind(this)} />
            </Route>
            <Route path="/title/:name" render={() => <Game name={this.state.cache} />} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </div>

    )
  }
}