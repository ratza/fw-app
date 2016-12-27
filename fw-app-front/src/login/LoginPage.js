import React, {Component} from 'react'
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
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="form-wrapper">
              <form action="" method="POST">
                <input className='form-control' type="text" placeholder='Login' value={this.props.user.username} onChange={this.onChangeUsername} />
                <input className='form-control' type="password" placeholder='Password' />
                <input type="submit" className="btn btn-block btn-submit" value='Submit'/>
                <p style={{color: '#000'}}>Testing Redux: {this.props.user.username}</p>
              </form>
            </div>
          </div>
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