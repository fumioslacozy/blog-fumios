import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import {Link} from 'react-router';
class Footer extends Component {


  render (){
        return (
              <div className="blog-footer">
                <div className="container">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
              </div>
        )

  }


}
function mapStateToProps(state){
   return {
     authenticated:state.auth.authenticated,
     userinfo:state.auth.userinfo
   };
}

export default connect(mapStateToProps)(Footer)
