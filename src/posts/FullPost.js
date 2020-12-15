import React, {Component} from 'react';
import PostService from '../services/PostsService'

class FullPost extends Component {

    state={post:null};
    postsService=new PostService();

   async componentDidMount() {
        const {postId}=this.props;
const post= await this.postsService.post(postId);
this.setState({post});

    }

    render() {
        const {post}=this.state;
        return (
            <div>
                {post && <div> {post.id}-{post.title}-{post.body}</div>}
            </div>
        );
    }
}

export default FullPost;