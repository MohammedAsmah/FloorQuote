import { getDashboardMetrics, getRecentActivity } from "@/src/lib/admin-data";
import DashboardHome from "@/src/components/admin/DashboardHome";

export default async function AdminHomePage() {
  const metrics = await getDashboardMetrics();
  const recentActivity = await getRecentActivity();

  return <DashboardHome metrics={metrics} recentActivity={recentActivity} />;
}
