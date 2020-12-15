import React, {Component} from 'react';
import CommentService from '../services/CommentsService'

class FullComment extends Component {

    state={comment:null};
   commentsService=new CommentService();

    async componentDidMount() {
        const {commentId}=this.props;
        const comment= await this.commentsService.comment(commentId);
        this.setState({comment});

    }



    render() {
        const {comment}=this.state;
        return (
            <div>
                {comment && <div> {comment.id}-{comment.name}-{comment.email}-{comment.body}</div>}
            </div>
        );
    }
}

export default FullComment;