import { BrowserRouter as Router } from "react-router-dom";
import * as React from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          Loading...
        </div>
      }
    >
      <Router>{children}</Router>
    </React.Suspense>
  );
};
