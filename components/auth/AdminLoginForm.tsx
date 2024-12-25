"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";

export function AdminLoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication logic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);

    // Redirect to the dashboard
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Admin Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            placeholder="admin@company.com"
            type="email"
            className="pl-10"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            type="password"
            className="pl-10"
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Authenticating..." : "Sign in to Admin Panel"}
      </Button>
    </form>
  );
}
