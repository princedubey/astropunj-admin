'use client';

import { cn } from '@/lib/utils';
import {
  Users,
  Star,
  LayoutDashboard,
  FileText,
  MessageSquare,
  Settings,
  HelpCircle,
  Wallet,
  BarChart,
  Shield,
  FolderTree,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Users', href: '/dashboard/users' },
  { icon: Star, label: 'Astrologers', href: '/dashboard/astrologers' },
  { icon: FolderTree, label: 'Categories', href: '/dashboard/categories' },
  { icon: FileText, label: 'Content', href: '/dashboard/content' },
  { icon: Wallet, label: 'Finance', href: '/dashboard/finance' },
  { icon: MessageSquare, label: 'Communication', href: '/dashboard/communication' },
  { icon: HelpCircle, label: 'Support', href: '/dashboard/support' },
  { icon: BarChart, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Shield, label: 'Security', href: '/dashboard/security' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className='py-2'>
          <h2 className="mb-2 px-4 text-lg font-semibold">Astropunj Dashboard</h2>
          </div>
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  pathname === item.href
                    ? 'bg-accent text-accent-foreground'
                    : 'transparent'
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}