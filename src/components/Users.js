import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  state = {
    showUsers: true,
  };

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users were found!!");
    }
  }

  toggleUsersHandler = () => {
    this.setState((prevState) => {
      return {
        showUsers: !prevState.showUsers,
      };
    });
  };

  render() {
    const { users } = this.props;
    const usersList = (
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
