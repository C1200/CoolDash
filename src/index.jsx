import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
          <div>
              <h1>Something went wrong.</h1>
              <code>{this.state.error.name}: {this.state.error.message}</code>
          </div>
      );
    }

    return this.props.children; 
  }
}
        
ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);