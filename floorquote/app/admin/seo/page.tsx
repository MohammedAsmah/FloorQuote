import { prisma } from "@/src/lib/prisma";
import { Card } from "@/src/components/ui/Card";

export const dynamic = 'force-dynamic';

export default async function SeoPage() {
  const isServer = typeof window === "undefined";

  let seoMetadataCount = 0;
  let redirectCount = 0;

  if (isServer) {
    [seoMetadataCount, redirectCount] = await Promise.all([
      prisma.seoMetadata.count(),
      prisma.redirectRule.count(),
    ]);
  }

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">SEO & Redirects</h1>
      <Card className="p-6">
        <p className="text-sm text-slate-600">Manage SEO metadata, schema, Open Graph content, and site redirects from one central admin view.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">SEO records</p>
            <p className="mt-3 text-3xl font-semibold">{seoMetadataCount}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Redirect rules</p>
            <p className="mt-3 text-3xl font-semibold">{redirectCount}</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
