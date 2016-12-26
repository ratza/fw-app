import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {changeName} from '../actions/change_username'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
  }

  onChangeUsername(event) {
    this.props.changeNameLocalVariable({username: event.target.value})
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <form action="" method="POST">
                <input className='form-control' type="text" placeholder='Login' value={this.props.user.username} onChange={this.onChangeUsername} />
                <input className='form-control' type="password" placeholder='Password' onChange={(event) => this.props.userChange({password: event.target.value})}/>
                <input type="submit" className="btn" value='Submit'/>
              </form>
            </div>
            <button onClick={() => this.props.changeNameLocalVariable({username: 'test'})}>Fallback</button>
          </div>
        </div>

        <div className="container">
          <Link to='/'>go login</Link>
          User: { this.props.user.username }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}



function matchDispatchToProps(dispatch){
  return bindActionCreators({changeNameLocalVariable: changeName}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginPage)