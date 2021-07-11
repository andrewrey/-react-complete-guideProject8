import { Component, Fragment } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Max",
  },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  state = {
    filteredUsers: [],
    searchTerm: "",
  };

  searchChangeHandler = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  componentDidMount() {
    /// send http request...
    this.setState({ filteredUsers: DUMMY_USERS });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
