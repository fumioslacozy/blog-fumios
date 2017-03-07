import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import {Link} from 'react-router';
class Footer extends Component {


  render (){
        return (
              <div className="blog-footer">
                  <hr></hr>
                <div className="container">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <h2 className="center-footer">
                                <a href="http://facebok.com/fumioslacozy"><span className="fa fa-facebook-official"></span></a>
                                &nbsp;
                                <a href="http://twitter.com/fumioslacozy"><span className="fa fa-twitter"></span></a>
                                &nbsp;
                                <a href="http://github.com/fumioslacozy"><span className="fa fa-github"></span></a> 
                                &nbsp;
                                <a href="#"><span className="fa fa-instagram"></span></a> 
                                &nbsp;
                                <a href="#"><span className="fa fa-wordpress"></span></a> 
                                &nbsp;
                                <a href="#"><span className="fa fa-twitch"></span></a> 
                                &nbsp;
                                <a href="#"><span className="fa fa-youtube"></span></a> 
                            </h2>
                            
                        </div>
                        <div className="col-md-6">
                                <h3 className="center-footer"><span className="fa fa-whatsapp"></span>&nbsp;+628979655277</h3>
                        </div>
                        
                    </div>
                    <div className="center-footer">Copyright &copy; 2017 by Felix</div>
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
