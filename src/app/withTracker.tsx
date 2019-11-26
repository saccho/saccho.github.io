import * as React from "react";
import * as GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize(process.env.REACT_APP_GA_TRACK_ID);

const withTracker = (WrappedComponent: React.FC, options = {}) => {
    const trackPage = (page: string) => {
        GoogleAnalytics.set({
            page,
            ...options
        });
        GoogleAnalytics.pageview(page);
    };

    const HOC = class extends React.Component<any, any> {
        componentDidMount() {
            const page = this.props.location.pathname;
            trackPage(page);
        }

        componentWillReceiveProps(nextProps: any) {
            const currentPage = this.props.location.pathname;
            const nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    return HOC;
};

export default withTracker;
