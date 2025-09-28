import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SecurityBadge } from "./SecurityBadge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Send, Shield, Zap, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ComposeDialogProps {
  trigger?: React.ReactNode;
}

export const ComposeDialog = ({ trigger }: ComposeDialogProps) => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [securityLevel, setSecurityLevel] = useState<"quantum" | "encrypted" | "secure">("encrypted");
  const [quantumEncryption, setQuantumEncryption] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSend = () => {
    if (!to || !subject || !message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Email Sent",
      description: `Message sent with ${securityLevel} encryption`,
    });
    
    // Reset form
    setTo("");
    setSubject("");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="quantum" className="gap-2">
            <Plus className="h-4 w-4" />
            Compose
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="quantum-card max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Zap className="h-5 w-5 text-quantum-glow" />
            Quantum Compose
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Security Settings */}
          <div className="quantum-card p-4 space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Security Level</Label>
              <SecurityBadge level={securityLevel} />
            </div>
            
            <Select value={securityLevel} onValueChange={(value: any) => setSecurityLevel(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="secure">Standard Encryption</SelectItem>
                <SelectItem value="encrypted">End-to-End Encryption</SelectItem>
                <SelectItem value="quantum">Quantum Secure</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Quantum Key Distribution</Label>
                <p className="text-xs text-muted-foreground">
                  Ultra-secure quantum entanglement encryption
                </p>
              </div>
              <Switch
                checked={quantumEncryption}
                onCheckedChange={setQuantumEncryption}
              />
            </div>
          </div>

          {/* Email Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="to">To</Label>
              <Input
                id="to"
                type="email"
                placeholder="recipient@domain.com"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="transition-all duration-300 focus:ring-2 focus:ring-quantum-glow/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Enter subject..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="transition-all duration-300 focus:ring-2 focus:ring-quantum-glow/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Compose your quantum-secured message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[200px] transition-all duration-300 focus:ring-2 focus:ring-quantum-glow/20"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>
                {quantumEncryption ? "Quantum encrypted" : "Standard encryption"}
              </span>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="quantum" onClick={handleSend} className="gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};