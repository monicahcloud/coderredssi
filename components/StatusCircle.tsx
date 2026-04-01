import React from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  PieChart,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

type StatusItem = {
  id: string;
  label: string;
  value: string;
  title: string;
  source: string;
  icon: LucideIcon;
  hoverX: number;
  className?: string;
};

const statusItems: StatusItem[] = [
  {
    id: "risk-cost",
    label: "National Risk Snapshot",
    value: "$1.3M",
    title: "Annual Cost of School Violence",
    source: "Source: National Center for Education Statistics (NCES)",
    icon: ShieldAlert,
    hoverX: -10,
  },
  {
    id: "shooting-incidents",
    label: "National Risk Snapshot",
    value: "1,626",
    title: "School shooting incidents",
    source: "Source: K–12 School Shooting Database (summary)",
    icon: PieChart,
    hoverX: 10,
    className: "translate-x-12",
  },
  {
    id: "behavioral-reality",
    label: "Behavioral Reality",
    value: "88%",
    title: "of school safety incidents are behavioral",
    source: "Source: 2025 K–12 School Safety Trends Report (CENTEGIX)",
    icon: AlertCircle,
    hoverX: -10,
  },
];

type StatusCardProps = {
  item: StatusItem;
};

function StatusCard({ item }: StatusCardProps) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ x: item.hoverX }}
      className={`cursor-default rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl flex items-center gap-4 ${item.className ?? ""}`}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
        <Icon className="h-5 w-5 text-primary" />
      </div>

      <div>
        {/* <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          {item.label}
        </p> */}
        <p className="text-xl font-bold text-white underline decoration-red-500 underline-offset-4">
          {item.value}
        </p>
        <p className="text-lg font-bold leading-tight tracking-tight text-white">
          {item.title}
        </p>
        <p className="text-[9px] font-mono uppercase tracking-tighter text-white/50">
          {item.source}
        </p>
      </div>
    </motion.div>
  );
}

const StatusCircle = () => {
  return (
    <div className="relative hidden items-center justify-center lg:flex">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative aspect-square w-full max-w-125 rounded-full border border-white/10 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
        />

        <div className="relative z-10 w-full space-y-4 p-8">
          {statusItems.map((item) => (
            <StatusCard key={item.id} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StatusCircle;
