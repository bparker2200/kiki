import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlug, STATES } from "@/data/states";

interface StatePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return STATES.map((state) => ({
    slug: state.slug,
  }));
}

export default async function StatePage({ params }: StatePageProps) {
  const { slug } = await params;
  const state = getStateBySlug(slug);

  if (!state) {
    notFound();
  }

  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "rgb(249, 248, 244)" }}
    >
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-3xl font-semibold">{state.label}</h1>
        <Link href="/" className="text-xs text-neutral-400 cursor-pointer">
          Back to system
        </Link>
      </div>
      <p className="text-neutral-600">Content coming soon.</p>
    </div>
  );
}
