import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import './assets/styles/_index.scss';
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import indexRoutes from './routes/index'

const THEME = createMuiTheme({
  typography: {
    "fontFamily": 'Sahel',
    "fontSize": 15,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
})

const hist = createBrowserHistory()

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route exact path={prop.path} component={prop.component} key={key} />
          )
        })}
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
