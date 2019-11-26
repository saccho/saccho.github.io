import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

class ScrollToTop extends React.Component<RouteComponentProps> {
  componentDidUpdate(prevProps: Readonly<RouteComponentProps>) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
