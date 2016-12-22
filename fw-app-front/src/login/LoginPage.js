import React, {Component} from 'react';
import {Link} from 'react-router'

class LoginPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <form action="" method="POST">
                <input className='form-control' type="text" placeholder='Login'/>
                <input className='form-control' type="password" placeholder='Password'/>
                <input type="submit" className="btn" value='Submit'/>
              </form>
            </div>
          </div>
        </div>
        <Link to='/'>go login</Link>
      </div>
    );
  }
}

export default LoginPage;