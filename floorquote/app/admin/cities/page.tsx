import { prisma } from "@/src/lib/prisma";
import { Card } from "@/src/components/ui/Card";

export const dynamic = 'force-dynamic';

export default async function CitiesPage() {
  const [cityCount, serviceAvailabilityCount, nearbyCount] = await Promise.all([
    prisma.supportedCity.count(),
    prisma.cityServiceAvailability.count(),
    prisma.cityNearby.count(),
  ]);

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Cities & Service Areas</h1>
      <Card className="p-6">
        <p className="text-sm text-slate-600">Configure supported cities, service availability, and nearby coverage details for your local SEO and lead routing.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Supported cities</p>
            <p className="mt-3 text-3xl font-semibold">{cityCount}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Service coverage rules</p>
            <p className="mt-3 text-3xl font-semibold">{serviceAvailabilityCount}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Nearby relationships</p>
            <p className="mt-3 text-3xl font-semibold">{nearbyCount}</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
