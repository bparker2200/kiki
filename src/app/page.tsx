import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "rgb(249, 248, 244)" }}
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-neutral-800 mb-2">
          LOVEABOUT
        </h1>
        <p className="text-neutral-600">
          A gift that shows someone how much they&apos;re loved
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
        <Link
          href="/system"
          className="flex-1 rounded-lg border border-neutral-200 bg-white px-6 py-5 text-center transition-colors hover:border-neutral-300 hover:bg-neutral-50"
        >
          <h2 className="text-lg font-medium text-neutral-800 mb-1">
            See the Product
          </h2>
          <p className="text-sm text-neutral-500">
            The concept, journeys, and emotional design
          </p>
        </Link>

        <Link
          href="/process/grok-brainstorm"
          className="flex-1 rounded-lg border border-neutral-200 bg-white px-6 py-5 text-center transition-colors hover:border-neutral-300 hover:bg-neutral-50"
        >
          <h2 className="text-lg font-medium text-neutral-800 mb-1">
            See How I Built This
          </h2>
          <p className="text-sm text-neutral-500">
            My AI workflow from idea to prototype
          </p>
        </Link>
      </div>
    </div>
  );
}
