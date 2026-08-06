import { prisma } from "@/src/lib/prisma";
import { Card } from "@/src/components/ui/Card";

export const dynamic = 'force-dynamic';

export default async function PricingPage() {
  // server: fetch pricing rules (initial scaffolding)
  let pricing: any[] = [];
  try {
    pricing = await prisma.pricingRule.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    // If DB or table doesn't exist yet, show empty state
    console.warn("Pricing fetch failed (likely missing table)", e);
    pricing = [];
  }

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Pricing</h1>
      <Card className="p-6">
        <div className="space-y-4">
          {pricing.length === 0 ? (
            <p className="text-sm text-slate-500">No pricing rules yet.</p>
          ) : (
            pricing.map((p) => (
              <div key={p.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{p.coatingType}</p>
                  <p className="text-sm text-slate-500">${p.lowPerSqFt.toFixed(2)} - ${p.highPerSqFt.toFixed(2)} / sqft</p>
                </div>
                <div className="text-sm text-slate-500">{p.active ? "Active" : "Inactive"}</div>
              </div>
            ))
          )}
        </div>
      </Card>
    </section>
  );
}
