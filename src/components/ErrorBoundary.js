import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>There has been an error!!!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;