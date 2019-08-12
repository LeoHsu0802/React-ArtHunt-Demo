import React from 'react'
import Header from './src/components/header/Header'
import Body from './src/components/body/Body'
import Home from './src/components/Home/Home'
import About from './src/components/About/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function app() {
  return (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Body} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} /> 
            </Switch>
        </div>
    </Router>
  )
}

export default app
