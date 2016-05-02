const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter

const Nav = (props) => (
  <div className="main-container">
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">CodeToads</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav pull-right">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/lobby">Lobby</Link></li>
            <li><Link to={`/${props.status}`}>{props.status}</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
)

module.exports = Nav