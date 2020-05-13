import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { routerMiddleware, ConnectedRouter } from "connected-react-router"
import reduxThunk from "redux-thunk"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
import createBrowserHistory from "history/createBrowserHistory"
import Dashboard from "./components/Dashboard/Dashboard"
import reducers from './reducers/reducers'
import "./index.css"
import App from "./App"


const history = createBrowserHistory()
const store = createStore(
  reducers(history),
  {},
  compose(applyMiddleware(routerMiddleware(history), reduxThunk))
)


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
