import React, { Component } from 'react'

export default class MyErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong,Counter Component cann't be loaded </h2>
        } else {
            // Normally, just render children
            return this.props.children;
        }
    }
}
