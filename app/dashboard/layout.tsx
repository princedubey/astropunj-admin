import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="hidden md:flex w-64 flex-col fixed inset-y-0">
          <Sidebar />
        </div>
        <div className="md:pl-64 flex-1">
          <Header />
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}