import React, {Component} from 'react';
import {users} from "./database/Users";
import UserComponent from "./UserComponent";
import './User.css';

class App extends Component {
  render() {
    return (
        <div>
          {
            users.map((user, index) => (<UserComponent item={user} key={index}/>))
          }
        </div>
    );
  }
}

export default App