import { OverviewMatrixRow } from "@/data/overviewRecipientMatrix";

interface OverviewMatrixProps {
  title: string;
  rows: OverviewMatrixRow[];
}

export default function OverviewMatrix({ title, rows }: OverviewMatrixProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-neutral-200">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700 border-r border-neutral-100">Step</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700 border-r border-neutral-100">What the user is doing</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700 border-r border-neutral-100">What it reinforces</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700 border-r border-neutral-100">Emotion</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700 border-r border-neutral-100">Why this step exists</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">What would break it</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.step} className={`border-b border-neutral-100 ${index % 2 === 1 ? "bg-neutral-100/40" : ""}`}>
                <td className="py-4 px-4 text-sm text-neutral-900 font-medium border-r border-neutral-100">
                  {row.step}. {row.title}
                </td>
                <td className="py-4 px-4 text-sm text-neutral-700 border-r border-neutral-100">{row.whatDoing}</td>
                <td className="py-4 px-4 text-sm text-neutral-700 border-r border-neutral-100">{row.reinforces}</td>
                <td className="py-4 px-4 text-sm text-neutral-700 border-r border-neutral-100">{row.emotion}</td>
                <td className="py-4 px-4 text-sm text-neutral-700 border-r border-neutral-100">{row.whyExists}</td>
                <td className="py-4 px-4 text-sm text-neutral-700">{row.failure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

