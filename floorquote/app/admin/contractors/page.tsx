import { getContractors } from "@/src/lib/admin-data";
import ContractorManager from "@/src/components/admin/ContractorManager";

export const dynamic = 'force-dynamic';

export default async function ContractorsPage() {
  try {
    const contractors = await getContractors();

    return <ContractorManager contractors={contractors} />;
  } catch (error) {
    console.error("Contractors page error:", error);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Contractors</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Unable to load contractors. Please check your database connection.</p>
          <p className="text-sm text-red-600 mt-2">Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      </div>
    );
  }
}
