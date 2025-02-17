import React from "react";
import { MessageSquareShare } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <MessageSquareShare
          className="h-8 w-8 text-blue-500 transform -rotate-6"
          strokeWidth={2.5}
        />
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-blue-500 rounded-full blur-xs opacity-50" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          ECHO
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Share the markdown
        </p>
      </div>
    </div>
  );
}

export default Logo;
