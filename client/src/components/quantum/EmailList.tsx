import { useState } from "react";
import { EmailCard } from "./EmailCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Inbox, 
  Send, 
  Archive, 
  Trash, 
  Star,
  Filter,
  RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils";

const folders = [
  { id: "inbox", name: "Inbox", icon: Inbox, count: 12, active: true },
  { id: "sent", name: "Sent", icon: Send, count: 34 },
  { id: "starred", name: "Starred", icon: Star, count: 8 },
  { id: "archive", name: "Archive", icon: Archive, count: 156 },
  { id: "trash", name: "Trash", icon: Trash, count: 23 },
];

const mockEmails = [
  {
    id: "1",
    sender: { name: "Dr. Alice Quantum", email: "alice@quantumtech.com", avatar: "" },
    subject: "Quantum Key Distribution Results",
    preview: "The latest QKD experiments show promising results with 99.97% fidelity...",
    timestamp: "2 min ago",
    isRead: false,
    securityLevel: "quantum" as const,
    priority: "high" as const,
  },
  {
    id: "2", 
    sender: { name: "Bob Encrypt", email: "bob@securemail.io", avatar: "" },
    subject: "Security Protocol Update",
    preview: "Please review the updated security protocols for our quantum communication...",
    timestamp: "15 min ago",
    isRead: false,
    securityLevel: "encrypted" as const,
  },
  {
    id: "3",
    sender: { name: "Carol Networks", email: "carol@networksec.com", avatar: "" },
    subject: "Monthly Security Report",
    preview: "Attached is the comprehensive security analysis for this month...",
    timestamp: "1 hour ago",
    isRead: true,
    securityLevel: "secure" as const,
  },
  {
    id: "4",
    sender: { name: "DevTeam", email: "dev@company.com", avatar: "" },
    subject: "System Maintenance Notice",
    preview: "Scheduled maintenance will occur this weekend to upgrade quantum servers...",
    timestamp: "3 hours ago",
    isRead: true,
    securityLevel: "standard" as const,
  },
  {
    id: "5",
    sender: { name: "Dr. Eve Quantum", email: "eve@quantumlab.org", avatar: "" },
    subject: "Research Collaboration Proposal",
    preview: "I would like to propose a collaboration on our quantum entanglement project...",
    timestamp: "1 day ago", 
    isRead: false,
    securityLevel: "quantum" as const,
  },
];

interface EmailListProps {
  className?: string;
}

export const EmailList = ({ className }: EmailListProps) => {
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <div className={cn("flex h-full", className)}>
      {/* Sidebar */}
      <div className="w-64 quantum-card border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Folders</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleRefresh}
              className={cn(refreshing && "animate-spin")}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
          
          <Button variant="outline" className="w-full gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="flex-1 p-2">
          {folders.map((folder) => {
            const Icon = folder.icon;
            const isActive = selectedFolder === folder.id;
            
            return (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 mb-1",
                  "hover:bg-muted/50",
                  isActive && "bg-quantum-glow/10 text-quantum-glow border border-quantum-glow/20"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{folder.name}</span>
                </div>
                {folder.count > 0 && (
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "text-xs",
                      isActive && "bg-quantum-glow/20 text-quantum-glow"
                    )}
                  >
                    {folder.count}
                  </Badge>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Email List */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b bg-muted/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold capitalize">{selectedFolder}</h2>
              <p className="text-sm text-muted-foreground">
                {mockEmails.filter(email => !email.isRead).length} unread messages
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-quantum-secure/20 text-quantum-secure">
                Quantum Secure
              </Badge>
            </div>
          </div>
        </div>

        {/* Email Cards */}
        <div className="flex-1 overflow-y-auto">
          {mockEmails.map((email) => (
            <EmailCard
              key={email.id}
              sender={email.sender}
              subject={email.subject}
              preview={email.preview}
              timestamp={email.timestamp}
              isRead={email.isRead}
              isSelected={selectedEmail === email.id}
              securityLevel={email.securityLevel}
              priority={email.priority}
              onClick={() => setSelectedEmail(selectedEmail === email.id ? null : email.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};