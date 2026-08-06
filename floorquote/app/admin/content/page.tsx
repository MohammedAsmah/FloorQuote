import { prisma } from "@/src/lib/prisma";
import { Card } from "@/src/components/ui/Card";

export default async function ContentPage() {
  const isServer = typeof window === "undefined";

  let contentPages = 0;
  let servicePages = 0;
  let reusableBlocks = 0;

  if (isServer) {
    [contentPages, servicePages, reusableBlocks] = await Promise.all([
      prisma.contentPage.count(),
      prisma.servicePage.count(),
      prisma.reusableBlock.count(),
    ]);
  }

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Content Management</h1>
      <Card className="p-6">
        <p className="text-sm text-slate-600">Manage landing pages, location pages, service page copy and reusable content blocks for your website.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Pages</p>
            <p className="mt-3 text-3xl font-semibold">{contentPages}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Service pages</p>
            <p className="mt-3 text-3xl font-semibold">{servicePages}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Reusable blocks</p>
            <p className="mt-3 text-3xl font-semibold">{reusableBlocks}</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
