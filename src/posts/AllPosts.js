import React, {Component} from 'react';
import PostsService from '../services/PostsService'
import Post from './Post'
import FullPost from './FullPost'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

class AllPosts extends Component {

    postsService=new PostsService();
    state={posts:[]};

    async componentDidMount(){
        const posts = await this.postsService.posts();
        this.setState({posts});

    }
    render() {
        const {posts}= this.state;
        const {match:{url}}=this.props;
        return (
            <div>
                {
                 posts.map(value => <Post item={value} key={value.id}/>)
                }
<hr/>
<Switch>
    <Route path={url+'/:id'} render={(props)=>{
        const {match:{params:{id}}}=props;
        return <FullPost postId={id} key={id}/>;
    }}/>
</Switch>
                <hr/>


            </div>
        );
    }
}

export default withRouter(AllPosts);