import { cn } from "@/lib/utils";
import { Shield, Lock, Zap } from "lucide-react";

interface SecurityBadgeProps {
  level: "quantum" | "encrypted" | "secure" | "standard";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const securityConfig = {
  quantum: {
    icon: Zap,
    label: "Quantum Secure",
    className: "quantum-secure text-quantum-secure border-quantum-secure/30 bg-quantum-secure/10",
  },
  encrypted: {
    icon: Lock,
    label: "End-to-End",
    className: "quantum-glow text-quantum-glow border-quantum-glow/30 bg-quantum-glow/10",
  },
  secure: {
    icon: Shield,
    label: "Encrypted",
    className: "text-quantum-particle border-quantum-particle/30 bg-quantum-particle/10",
  },
  standard: {
    icon: Shield,
    label: "Standard",
    className: "text-muted-foreground border-border bg-muted/20",
  },
};

const sizeConfig = {
  sm: "text-xs px-2 py-1 gap-1",
  md: "text-sm px-3 py-1.5 gap-1.5", 
  lg: "text-base px-4 py-2 gap-2",
};

export const SecurityBadge = ({ level, className, size = "md" }: SecurityBadgeProps) => {
  const config = securityConfig[level];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border font-medium transition-all duration-300",
        config.className,
        sizeConfig[size],
        level === "quantum" && "animate-pulse-quantum",
        className
      )}
    >
      <Icon className={cn(
        size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-5 w-5"
      )} />
      <span>{config.label}</span>
    </div>
  );
};