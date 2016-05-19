const React = require('react')
const { Link } = require('react-router');

class Footer extends React.Component {
  render(){
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="list-inline">
                <li><Link to="/">Home</Link></li>
                <li className="footer-menu-divider">&#9679;</li>
                <li><Link to="/lobby">Lobby</Link></li>
              </ul>
              <p className="copyright text-muted small">Copyright © CodeToads 2016. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
      );
  }
}

module.exports = Footer
