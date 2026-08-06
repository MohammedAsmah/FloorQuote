import { getContractors } from "@/src/lib/admin-data";
import ContractorManager from "@/src/components/admin/ContractorManager";

export default async function ContractorsPage() {
  const contractors = await getContractors();

  return <ContractorManager contractors={contractors} />;
}
