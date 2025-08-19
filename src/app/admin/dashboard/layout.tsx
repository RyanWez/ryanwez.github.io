import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions";
import { Code2, LogOut } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-semibold">Admin Dashboard</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
                <Link href="/">Back to Site</Link>
            </Button>
            <form action={logout}>
                <Button variant="destructive" size="sm" type="submit">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                </Button>
            </form>
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 sm:py-0">{children}</main>
    </div>
  );
}
