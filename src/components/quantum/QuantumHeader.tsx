import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ComposeDialog } from "./ComposeDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Settings, 
  Bell,
  Zap,
  Shield,
  Menu
} from "lucide-react";

interface QuantumHeaderProps {
  onMenuClick?: () => void;
}

export const QuantumHeader = ({ onMenuClick }: QuantumHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo & Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-quantum-glow to-quantum-energy animate-glow">
                <Zap className="h-5 w-5 text-background" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-quantum-glow to-quantum-energy bg-clip-text text-transparent">
                  QuantumMail
                </h1>
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3 text-quantum-secure" />
                  <span className="text-xs text-muted-foreground">Ultra Secure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Search */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search quantum-secured emails..."
              className="pl-10 bg-muted/50 border-none focus:ring-2 focus:ring-quantum-glow/20"
            />
          </div>

          {/* Right: Actions & Profile */}
          <div className="flex items-center gap-3">
            <ComposeDialog />
            
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-quantum-warning">
                  3
                </Badge>
              </Button>
              
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 ring-2 ring-quantum-glow/30">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback className="bg-quantum-glow/20 text-foreground text-sm">
                  QU
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:block text-sm">
                <p className="font-medium">Quantum User</p>
                <p className="text-xs text-muted-foreground">Secure Session</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum particles effect */}
      <div className="absolute inset-0 quantum-particles opacity-20 pointer-events-none" />
    </header>
  );
};