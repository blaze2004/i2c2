import { EvervaultCard } from "./ui/evervault-card";

export default function ToBeAnnounced() {
    return (
        <EvervaultCard text={"To be announced soon"} className="w-[75vw] h-96 ring-2 rounded-3xl my-4" stringLength={5500} textClassName="h-full w-full" />
    );
}