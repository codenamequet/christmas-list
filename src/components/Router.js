import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import List from './List'
import NotFound from './NotFound'

//1. Make a component that shows an individuals list
//2. Make a component that tells person to check url

const Router = () => (
  <BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/:name" component={List} />
			<Route component={NotFound} />
		</Switch>
  </BrowserRouter>
)

export default Router
