import React, {Component} from 'react';
import {Link} from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <nav className="navbar">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-colaspe" aria-expanded="false">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                  </div>

                  <div className="collapse navbar-collapse" id="menu-colaspe">
                    <ul className="nav navbar-nav">
                      <li>
                        <Link to='/'>Home page</Link>
                      </li>
                      <li>
                        <Link to='/login'>Login Page</Link>
                      </li>
                    </ul>
                  </div>

                </div>
              </nav>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;