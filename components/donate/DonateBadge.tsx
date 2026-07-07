import Link from "next/link";
import { Heart } from "lucide-react";

export function DonateBadge() {
  return (
    <Link
      href="/donate"
      className="
        absolute left-1/2 top-0 z-[60]
        -translate-x-1/2 -translate-y-1/3
        rounded-b-2xl bg-red-600
        px-5 py-3
        shadow-2xl ring-4 ring-black
        transition-all duration-300
        hover:bg-red-700 hover:-translate-y-1/4
      ">
      <div className="flex items-center gap-2">
        <Heart className="h-4 w-4 fill-white text-white" />
        <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
          Donate
        </span>
      </div>
    </Link>
  );
}
