import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="mt-2 text-2xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-2 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block text-sm font-medium text-primary hover:underline"
        >
          Back to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
