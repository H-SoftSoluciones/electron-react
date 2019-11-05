import React, { Component } from 'react'

// import {Provider} from 'mobx-react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Frame } from '../components'
import Routers from './route'

export default class Index extends Component {
  render() {
    return (
      <HashRouter>
        <Frame>
          <Switch>
            <Redirect exact from="/" to="/home" />
            {Routers.map((r, index) => {
              return <Route {...r} key={index} />
            })}
          </Switch>
        </Frame>
      </HashRouter>
    )
  }
}
