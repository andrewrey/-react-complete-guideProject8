import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    console.log("unmounted");
  }
  render() {
    const { name } = this.props;
    return <li className={classes.user}>{name}</li>;
  }
}

export default User;
