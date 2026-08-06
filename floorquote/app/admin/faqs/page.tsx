import { prisma } from "@/src/lib/prisma";
import { Card } from "@/src/components/ui/Card";

export default async function FaqsPage() {
  const faqCount = await prisma.faq.count();

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">FAQs</h1>
      <Card className="p-6">
        <p className="text-sm text-slate-600">Manage frequently asked questions for services and city-specific web pages.</p>
        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">FAQ items</p>
          <p className="mt-3 text-3xl font-semibold">{faqCount}</p>
        </div>
      </Card>
    </section>
  );
}
