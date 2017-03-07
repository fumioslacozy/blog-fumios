import React, { Component, PropTypes } from 'react';
import * as thunkMiddleware from 'redux-thunk';
import {connect} from 'react-redux';
import * as actions from '../../actions';
class PostsShow extends Component{
    static contextTypes= {
        router:PropTypes.object
    }
    componentWillMount(){
    this.props.PostShow(this.props.params.id);
    }
    handleDeleteClick(){
        this.props.deletePost(this.props.params.id);
             this.context.router.push('/posts');
        }
    handleDeletePost() {
            if(this.props.authenticated){
                return (                
                    <button onClick={this.handleDeleteClick.bind(this)} className="btn btn-danger pull-right">Delete</button>
                );
            }
    }
    renderPost(post){
        if(post){
        return (
            <div className="col-md-12">
                <div className="thumbnail">
                    <img src="/img/1000x350.png"></img>
                </div>
                    <h3>{post.title} {this.handleDeletePost()}</h3>  
                    <hr></hr>
                    <p>{post.body}</p>       
            </div>
               );
        }
    }
    
    
    render(){
        const {post,loading,error} = this.props.activePost;
        if(loading == true){
            return <div className="loader"></div>;
        }
        return (
            <div className="col-md-12">
                <div className="col-md-2">
                    
                </div>
                <div className="col-md-8">
                    {this.renderPost(post)}    
                </div>
                <div className="col-md-2">
                    
                </div>
            </div>
               );
    }
}
function mapStateToProps(state){
    return {
        activePost:state.posts.activePost,
        authenticated:state.auth.authenticated
    }
}

export default connect(mapStateToProps,actions)(PostsShow);
