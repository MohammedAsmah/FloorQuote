import { getLeads } from "@/src/lib/admin-data";
import LeadTable from "@/src/components/admin/LeadTable";

export default async function LeadsPage() {
  const leads = await getLeads();

  return <LeadTable leads={leads} />;
}
