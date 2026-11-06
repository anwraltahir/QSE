import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Presentation Dashboard caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#061A3D] text-[#DCE5F2] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#08275A] border border-[#ff4d4f]/40 rounded-2xl p-8 text-center shadow-2xl">
            <div className="w-16 h-16 bg-[#ff4d4f]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#ff4d4f]">
              <AlertTriangle size={32} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Presentation View Encountered an Issue</h2>
            <p className="text-sm text-[#DCE5F2]/70 mb-6">
              The presentation dashboard recovered gracefully. You can reload to resume from your current section.
            </p>
            <button
              onClick={this.handleReset}
              className="px-6 py-3 bg-[#168BFF] hover:bg-[#38C8FF] text-white font-semibold rounded-lg flex items-center justify-center gap-2 mx-auto transition-colors"
            >
              <RotateCcw size={18} />
              Reload Presentation
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
