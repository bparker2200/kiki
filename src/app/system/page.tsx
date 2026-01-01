import Image from "next/image";
import OverviewMatrix from "@/components/OverviewMatrix";
import { RECIPIENT_MATRIX } from "@/data/overviewRecipientMatrix";
import { SENDER_MATRIX } from "@/data/overviewSenderMatrix";

export default function SystemPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[1200px] overflow-x-hidden">
        <div className="w-full max-w-[280px] mb-10">
          <Image
            src="/overview/overview-warm.png"
            alt="Overview"
            width={560}
            height={373}
            priority
            className="w-full h-auto block"
          />
        </div>

        <OverviewMatrix title="Recipient" rows={RECIPIENT_MATRIX} />

        <div className="my-12 border-t border-neutral-300"></div>

        <OverviewMatrix title="Sender" rows={SENDER_MATRIX} />
      </div>
    </div>
  );
}

