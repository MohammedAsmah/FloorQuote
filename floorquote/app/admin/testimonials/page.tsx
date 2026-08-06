import { prisma } from "@/src/lib/prisma";
import { Card } from "@/src/components/ui/Card";

export const dynamic = 'force-dynamic';

export default async function TestimonialsPage() {
  try {
    const testimonialCount = await prisma.testimonial.count();

    return (
      <section className="space-y-6">
        <h1 className="text-2xl font-semibold">Testimonials</h1>
        <Card className="p-6">
          <p className="text-sm text-slate-600">Manage customer reviews, before/after photos, and city-specific testimonial highlights.</p>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Testimonials</p>
            <p className="mt-3 text-3xl font-semibold">{testimonialCount}</p>
          </div>
        </Card>
      </section>
    );
  } catch (error) {
    console.error("Testimonials page error:", error);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Testimonials</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Unable to load testimonials data. Please check your database connection.</p>
          <p className="text-sm text-red-600 mt-2">Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      </div>
    );
  }
}
