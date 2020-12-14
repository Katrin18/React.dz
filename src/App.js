import React, {Component} from 'react';
import './App.css'
import AllPosts from './AllPosts'
import AllComments from './AllComments'
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

            <div>
                <Link to={"/posts"}>posts</Link>
            </div>
                <div>
                    <Link to={"/comments"}>comments</Link>
                </div>

                <div className={'app-route'}>
                    <Switch>
                        <Route path={'/posts'}>
                            <AllPosts/>
                        </Route>

                        <Route path={'/comments'}>
                            <AllComments/>
                        </Route>

                    </Switch>
                </div>
            </div>
            </Router>
        );
    }
}

export default App;