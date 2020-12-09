import React, {Component} from 'react';
import Post from "./Post";
import {PostsService} from "./PostsService"

class AllPosts extends Component {

    postsService=new PostsService();
    state= {posts:[],choseOne:null};

    onSelectPost=(id)=>{
       this.postsService.getPostById(id).then(value => this.setState({choseOne:value}))
    };

    componentDidMount() {
        this.postsService.getAllPosts().then(value => this.setState({posts:value}));
    }

    render() {
        let {posts,choseOne}=this.state;
        return (
            <div>
                {
                    posts.map(post=> <Post item={post} key={post.id} onSelectPost={this.onSelectPost} />)
                }
                {
                    choseOne && <h2>{choseOne.id}-{choseOne.title}</h2>
                }
            </div>
        );
    }
}

export default AllPosts;