import React, {Component} from 'react';
import AllPosts from './posts/AllPosts';
import AllComments from './comments/AllComments';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <ul>
                    <li>
                        <Link to={'/posts'}>to posts page</Link>
                    </li>

                    <li>
                        <Link to={'/comments'}>to comments page</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path={'/posts'} render={(props)=>{
                        return <AllPosts/>
                    }}/>
                    <Route path={'/comments'} render={(props)=>{
                        return <AllComments/>
                    }}/>

                </Switch>


            </div>
            </Router>
        );
    }
}

export default App;