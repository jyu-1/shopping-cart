import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="main-flex">
                    <div>Something went wrong.</div>
                    <a href="/">Click here to go back to Home Page</a>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
