import React from 'react'
import Header from './src/components/header/Header'
import Body from './src/components/body/Body'
import About from './src/components/about/About'
import Art from './src/components/art/Art'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function app() {

  return (
      <Router>
          <div>
              <Header />
              <Switch>
                  <Route exact path="/" component={Body} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/art" component={Art} />
              </Switch>
          </div>
      </Router>
    )
  }



export default app
