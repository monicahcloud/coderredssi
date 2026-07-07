import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function DonateButton() {
  return (
    <Button
      asChild
      size="lg"
      className="bg-red-600 hover:bg-red-700 text-white font-semibold">
      <Link href="/donate">
        <Heart className="mr-2 h-5 w-5" />
        Donate Now
      </Link>
    </Button>
  );
}
