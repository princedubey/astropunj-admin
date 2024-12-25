import { AdminLoginForm } from "@/components/auth/AdminLoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Admin Access</CardTitle>
          <CardDescription className="text-center">
            Secure login for administrative users only
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AdminLoginForm />
        </CardContent>
      </Card>
    </div>
  );
}