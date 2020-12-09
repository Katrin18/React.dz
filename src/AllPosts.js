import React, {Component} from 'react';
import Post from "./Post"
import PostsService from "./PostsService"

class AllPosts extends Component {

    postsService=new PostsService();
    state={posts:[],choseOne=null}

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AllPosts;