import { cn } from "@/lib/utils";
import { SecurityBadge } from "./SecurityBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface EmailCardProps {
  sender: {
    name: string;
    email: string;
    avatar?: string;
  };
  subject: string;
  preview: string;
  timestamp: string;
  isRead: boolean;
  isSelected?: boolean;
  securityLevel: "quantum" | "encrypted" | "secure" | "standard";
  priority?: "high" | "normal" | "low";
  onClick?: () => void;
  className?: string;
}

export const EmailCard = ({
  sender,
  subject,
  preview,
  timestamp,
  isRead,
  isSelected,
  securityLevel,
  priority,
  onClick,
  className,
}: EmailCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer transition-all duration-300",
        "quantum-card p-4 m-2 rounded-lg",
        "hover:shadow-lg hover:scale-[1.02]",
        !isRead && "ring-1 ring-quantum-glow/20",
        isSelected && "ring-2 ring-quantum-glow quantum-glow",
        className
      )}
    >
      {/* Quantum particles effect on hover */}
      <div className="absolute inset-0 quantum-particles opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      
      <div className="relative z-10 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-quantum-glow/20">
              <AvatarImage src={sender.avatar} alt={sender.name} />
              <AvatarFallback className="bg-quantum-glow/20 text-foreground">
                {sender.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className={cn(
                "font-medium truncate",
                !isRead && "text-foreground font-semibold"
              )}>
                {sender.name}
              </p>
              <p className="text-sm text-muted-foreground truncate">
                {sender.email}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SecurityBadge level={securityLevel} size="sm" />
            {priority === "high" && (
              <Badge variant="destructive" className="text-xs">
                Priority
              </Badge>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-1">
          <h3 className={cn(
            "font-medium line-clamp-1",
            !isRead && "text-foreground font-semibold"
          )}>
            {subject}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {preview}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{timestamp}</span>
          </div>
          {!isRead && (
            <div className="h-2 w-2 rounded-full bg-quantum-glow animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
};