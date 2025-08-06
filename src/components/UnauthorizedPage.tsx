"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

interface UnauthorizedPageProps {
  title?: string;
  message?: string;
  showLoginButton?: boolean;
  showHomeButton?: boolean;
}

export function UnauthorizedPage({
  title = "Access Denied",
  message = "You don't have permission to view this page",
  showLoginButton = true,
  showHomeButton = true,
}: UnauthorizedPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex justify-center gap-4">
          {showHomeButton && (
            <Button asChild variant="outline">
              <Link href="/">Go Home</Link>
            </Button>
          )}

          {showLoginButton && (
            <Button asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
