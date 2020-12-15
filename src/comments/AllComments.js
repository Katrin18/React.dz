import React, {Component} from 'react';
import CommentsService from '../services/CommentsService'
import Comment from './Comment'
import FullComment from './FullComment'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

class AllComments extends Component {

    commentsService=new CommentsService();
    state={comments:[]};

    async componentDidMount(){
        const comments = await this.commentsService.comments();
        this.setState({comments});

    }
    render() {
        const {comments}= this.state;
        const {match:{url}}=this.props;
        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=>{
                        const {match:{params:{id}}}=props;
                        return <FullComment commentId={id} key={id}/>;
                    }}/>
                </Switch>
                <hr/>




            </div>
        );
    }
}

export default withRouter(AllComments);