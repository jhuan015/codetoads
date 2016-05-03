const React = require('react')
const ReactDOM = require('react-dom')
const HomeContent = require('./home/homeContent')
const Signup = require('./home')
const Lobby = require('./lobby/lobby')
const Layout = require('./layout')
const Auth = require('./auth')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomeContent} />
      <Route path='/signup' component={Auth} />
      <Route path='/lobby' component={Lobby} />
      <Route path="*" component={HomeContent}/>
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('login-page'))
