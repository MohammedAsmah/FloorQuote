import { prisma } from "@/src/lib/prisma";
import { Card } from "@/src/components/ui/Card";

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  try {
    const [postCount, categoryCount, tagCount, authorCount] = await Promise.all([
      prisma.blogPost.count(),
      prisma.category.count(),
      prisma.tag.count(),
      prisma.author.count(),
    ]);

    return (
      <section className="space-y-6">
        <h1 className="text-2xl font-semibold">Blog Management</h1>
        <Card className="p-6">
          <p className="text-sm text-slate-600">Create blog posts, manage authors, organize categories/tags, and control publish scheduling.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Posts</p>
              <p className="mt-3 text-3xl font-semibold">{postCount}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Categories</p>
              <p className="mt-3 text-3xl font-semibold">{categoryCount}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Tags</p>
              <p className="mt-3 text-3xl font-semibold">{tagCount}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Authors</p>
              <p className="mt-3 text-3xl font-semibold">{authorCount}</p>
            </div>
          </div>
        </Card>
      </section>
    );
  } catch (error) {
    console.error("Blog page error:", error);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Blog Management</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Unable to load blog data. Please check your database connection.</p>
          <p className="text-sm text-red-600 mt-2">Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      </div>
    );
  }
}
