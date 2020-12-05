import React, {Component} from 'react';
import Post from "./Post";

class AllPosts extends Component {

    state= {posts:[],choseOne:null};

    constructor() {
        super();
    }

    onSelectPost=(id)=>{
        let {posts}=this.state;
        let find= posts.find(value => value.id===id);
        this.setState({choseOne:find});
    };

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
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts=>{
                this.setState({posts});
            });
    }
}

export default AllPosts;