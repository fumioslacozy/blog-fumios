import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import {Link} from 'react-router';
class Header extends Component {

    userInfo(){
        if(this.props.userinfo){
        return (
     <li className="nav-item pull-xs-right" key={1}>
      <Link className="nav-item nav-link" to="#">{this.props.userinfo.name}</Link>
      </li>
      );
        }
    } 

  renderLinks(){
    if(this.props.authenticated){
      return[
      <li key={2}><Link to="/post/add">New Post</Link></li>,
      <li key={3}><Link className="nav-item nav-link" to="/logout">Logout</Link></li>
     
      ];
    }else{
      return [
        <li key={2}><Link to="/register">Register</Link></li>,
        <li key={1}><Link to="/login">Login</Link></li>
      ];
    }
  }

  render (){
      console.log(this.props.userinfo);
        return (
              <nav className="navbar navbar-default">
                <div className="container-fluid">  
                  <Link to="/" className="navbar-brand">Fumios</Link>
                    <ul className="nav navbar-nav pull-right">
                    {this.renderLinks()}
                    {this.userInfo()}
                    </ul>
                </div>
              </nav>
        )

  }


}
function mapStateToProps(state){
   return {
     authenticated:state.auth.authenticated,
     userinfo:state.auth.userinfo
   };
}

export default connect(mapStateToProps)(Header)
