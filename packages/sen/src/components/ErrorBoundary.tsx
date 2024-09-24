import { Component, ComponentType, ErrorInfo, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

type ErrorBoundaryProps = PropsWithChildren<{
  Fallback: ComponentType<{ error: unknown }>;
}>;

type ErrorBoundaryState = {
  error: unknown;
};

class BaseErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    //
  }

  render() {
    const { children, Fallback } = this.props;
    const { error } = this.state;

    if (!!error) {
      return <Fallback error={error} />;
    }

    return children;
  }
}

export function ErrorBoundary(props: ErrorBoundaryProps) {
  const { pathname } = useLocation();

  return <BaseErrorBoundary {...props} key={pathname} />;
}
