import React, { Component } from 'react'
import Home from './Home'
import Game from './Game'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cache: null
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
              <Home setCache={this.setCache.bind(this)} cache={this.cache.bind(this)} />
            </Route>
            <Route path="/title/:name" component={Game} />
          </Switch>
        </BrowserRouter>
      </div>

    )
  }
}