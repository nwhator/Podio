import React from "react";
import type { EventStatus } from "@/types/event";
import { Sparkles, Clock, CheckCircle2, AlertCircle, Calendar } from "lucide-react";

interface EventStatusBadgeProps {
  status: EventStatus;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function EventStatusBadge({
  status,
  size = "md",
  className = "",
}: EventStatusBadgeProps) {
  const configs: Record<
    EventStatus,
    { label: string; bg: string; text: string; dot: string; icon?: React.ElementType }
  > = {
    "draft": {
      label: "Draft",
      bg: "bg-gray-100 border-gray-200",
      text: "text-gray-700",
      dot: "bg-gray-400",
    },
    "coming-soon": {
      label: "Coming Soon",
      bg: "bg-sky-50 border-sky-200",
      text: "text-sky-800",
      dot: "bg-sky-500",
      icon: Clock,
    },
    "registration-open": {
      label: "Registration Open",
      bg: "bg-emerald-50 border-emerald-200",
      text: "text-emerald-800",
      dot: "bg-emerald-500 animate-pulse",
      icon: Sparkles,
    },
    "almost-full": {
      label: "Almost Full",
      bg: "bg-amber-50 border-amber-200",
      text: "text-amber-800",
      dot: "bg-amber-500",
      icon: AlertCircle,
    },
    "registration-closed": {
      label: "Registration Closed",
      bg: "bg-rose-50 border-rose-200",
      text: "text-rose-800",
      dot: "bg-rose-500",
      icon: AlertCircle,
    },
    "event-day": {
      label: "Happening Today",
      bg: "bg-purple-50 border-purple-300",
      text: "text-[#6B2D8B]",
      dot: "bg-[#6B2D8B] animate-ping",
      icon: Calendar,
    },
    "completed": {
      label: "Event Completed",
      bg: "bg-slate-100 border-slate-200",
      text: "text-slate-700",
      dot: "bg-slate-400",
      icon: CheckCircle2,
    },
  };

  const config = configs[status] || configs["registration-open"];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border font-black uppercase tracking-wider ${config.bg} ${config.text} ${sizeClasses[size]} ${className}`}
    >
      <span className={`h-2 w-2 rounded-full ${config.dot}`} aria-hidden="true" />
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      <span>{config.label}</span>
    </span>
  );
}
