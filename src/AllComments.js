import React, {Component} from 'react';
import CommentServer from './CommentServer'
import Comment from './Comment'

class AllComments extends Component {
    commentsServer=new CommentServer();
    state={comments:[]};

    async componentDidMount() {
        let comments=await this.commentsServer.comments();
        this.setState({comments});
    }

    render() {
        let {comments}= this.state;
        return (
            <div>{
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
            </div>
        );
    }
}

export default AllComments;