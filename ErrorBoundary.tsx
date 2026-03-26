import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <AlertCircle className="w-16 h-16 text-brand-pink mx-auto mb-6" />
            <h1 className="font-poppins font-bold text-3xl text-white mb-4">
              Something went wrong
            </h1>
            <p className="font-poppins text-white/50 mb-8">
              We encountered an unexpected error. Please try refreshing the page or return home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple font-poppins font-bold text-sm text-white hover:shadow-xl hover:shadow-brand-pink/20 transition-all duration-300"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 font-poppins font-bold text-sm text-white hover:bg-white/10 transition-all duration-300"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export class RouteErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[RouteErrorBoundary]', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <p className="font-poppins text-white/40 text-sm mb-4">
              This page could not be loaded.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cyan-400 font-poppins text-sm hover:text-cyan-300 transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
