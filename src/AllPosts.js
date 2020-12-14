import React, {Component} from 'react';
import PostsServer from './PostsServer'
import Post from './Post'

class AllPosts extends Component {
    postsServer=new PostsServer();
state={posts:[]};

    async componentDidMount() {
       let posts=await this.postsServer.posts();
        this.setState({posts});
    }

    render() {
        let {posts}= this.state;
        return (
            <div>{
                posts.map(value => <Post item={value} key={value.id}/>)
            }
            </div>
        );
    }
}

export default AllPosts;