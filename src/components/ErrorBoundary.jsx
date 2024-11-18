import React from "react";

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hasError : false};
    }

    static getStateFromError(error) {
        return {hasError : true};
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error while fetching Details.</h1>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;