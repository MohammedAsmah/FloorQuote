import { getContractors } from "@/src/lib/admin-data";
import ContractorManager from "@/src/components/admin/ContractorManager";

export const dynamic = 'force-dynamic';

export default async function ContractorsPage() {
  const contractors = await getContractors();

  return <ContractorManager contractors={contractors} />;
}
