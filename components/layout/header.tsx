'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Bell, Moon, Sun, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter(); // For client-side navigation

  // Ensure the component is mounted to access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to toggle themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Function to handle logout
  const handleLogout = async () => {
    setIsLoggingOut(true);
    // Simulate logout process
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoggingOut(false);

    // Navigate to the login page
    router.push('/login');
  };

  // Prevent rendering before hydration
  if (!mounted) return null;

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative group">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <span className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Notifications
            </span>
          </div>

          {/* Theme Toggle */}
          <div className="relative group">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Sun className="h-5 w-5 transition-transform" />
              ) : (
                <Moon className="h-5 w-5 transition-transform" />
              )}
            </Button>
            <span className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </span>
          </div>

          {/* Logout */}
          <div className="relative group">
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="icon"
              aria-label="Logout"
              disabled={isLoggingOut} // Disable button during logout
            >
              {isLoggingOut ? (
                <span className="loader h-4 w-4 border-2 border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <LogOut className="h-5 w-5" />
              )}
            </Button>
            <span className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Logout
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
