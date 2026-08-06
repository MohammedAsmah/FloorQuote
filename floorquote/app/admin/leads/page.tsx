import { getLeads } from "@/src/lib/admin-data";
import LeadTable from "@/src/components/admin/LeadTable";

export const dynamic = 'force-dynamic';

export default async function LeadsPage() {
  try {
    const leads = await getLeads();

    return <LeadTable leads={leads} />;
  } catch (error) {
    console.error("Leads page error:", error);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Leads</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Unable to load leads. Please check your database connection.</p>
          <p className="text-sm text-red-600 mt-2">Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      </div>
    );
  }
}
