import { Component, Fragment } from "react";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";
import Users from "./Users";

class UserFinder extends Component {
  static contextType = UsersContext;
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
    this.setState({ filteredUsers: this.context.users });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
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
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
