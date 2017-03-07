import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {Link} from 'react-router';
import spinner from 'react-loader';
class Posts extends Component {

  componentWillMount(){
  this.props.fetchPost();
  this.props.userInfo();
  }
  handleEditButton(post) {
      if(this.props.authenticated){
      return ( 
            <Link className="btn btn-warning" to ={"posts/"+post.id+"/edit"}>Edit</Link>
             );
      }
  }

 renderPosts(posts) {
    return posts.map((post) => {
      return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6" key={post.id}>
                <div className="thumbnail">
                    <img src="/img/250x250.png"></img>
                    <div className="caption">
                        <h3>{post.title}</h3>
                        <p className="text-clamp">{post.body}</p>
                        <Link className=" btn btn-primary" to={"posts/"+post.id}>See more
                        </Link>
                        &nbsp;{this.handleEditButton(post)}
                    </div>
                </div>
            </div>
        
      );
    });
  }
  renderPostsLists(posts) {
    return posts.map((post) => {
      return (
            <li className="list-group-item list-group-item-info" key={post.id}>
                <Link to={"posts/"+post.id}>
                {post.title}
                </Link>
            </li>
        
      );
    });
  }

    render(){
        const {posts,loading,error} = this.props.postsList;
        if(loading === true){  
            return (
                <div className="container-ball">
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
            );
        }
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div className="row">
                    {this.renderPosts(posts)}
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Latest Articles</h3>
                        </div>
                        <div className="panel-body">
                            <div>
                                <ul className="list-group">
                                    {this.renderPostsLists(posts)}
                                </ul>
                            </div>
                        </div>
                        <div className="panel-heading">
                            <h3 className="panel-title">Featured</h3>
                        </div>
                        <div className="panel-body">
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=MhkGQAoc7bc"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        );

    }
}

function mapStateToProps(state) {
    return {
        postsList:state.posts.postsList,
        authenticated:state.auth.authenticated,
        userinfo : state.auth.userinfo
    }
}
export default connect(mapStateToProps,actions)(Posts);
