import type { Metadata } from "next";
import AdminShell from "@/src/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "FloorQuote Admin Dashboard",
  description: "Premium internal admin dashboard for managing leads, contractors, assignments, and revenue.",
};

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return <AdminShell>{children}</AdminShell>;
}
