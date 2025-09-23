import { useState } from "react";
// import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface LoginButtonProps {
  provider: "google" | "microsoft";
  onClick: () => void;
  disabled?: boolean;
}

export default function LoginButton({
  provider,
  onClick,
  disabled = false,
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setIsLoading(true);
    onClick();
  };

  const providerConfig = {
    google: {
      name: "Google",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
      ),
      bgColor: "bg-white hover:bg-gray-50",
      textColor: "text-gray-700",
      borderColor: "border-gray-300",
    },
    microsoft: {
      name: "Microsoft",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#F25022" d="M0 0h11.377v11.372H0z" />
          <path fill="#00A4EF" d="M12.623 0H24v11.372H12.623z" />
          <path fill="#7FBA00" d="M0 12.628h11.377V24H0z" />
          <path fill="#FFB900" d="M12.623 12.628H24V24H12.623z" />
        </svg>
      ),
      bgColor: "bg-white hover:bg-gray-50",
      textColor: "text-gray-700",
      borderColor: "border-gray-300",
    },
  };

  const config = providerConfig[provider];

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`
        w-full flex justify-center items-center px-4 py-3 
        border rounded-lg shadow-sm text-sm font-medium
        transition-all duration-200 ease-in-out
        ${config.bgColor} ${config.textColor} ${config.borderColor}
        ${
          disabled || isLoading
            ? "opacity-50 cursor-not-allowed"
            : "hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        }
      `}
    >
      {/* {isLoading ? (
        <LoadingSpinner size="sm" className="mr-3" />
      ) : (
        <span className="mr-3">{config.icon}</span>
      )}
      {isLoading ? "Redirecting..." : `Continue with ${config.name}`} */}
    </button>
  );
}
