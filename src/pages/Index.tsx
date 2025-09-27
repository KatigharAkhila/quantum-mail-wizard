import { useState } from "react";
import { QuantumHeader } from "@/components/quantum/QuantumHeader";
import { EmailList } from "@/components/quantum/EmailList";
import { SecurityBadge } from "@/components/quantum/SecurityBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Lock, 
  Activity,
  TrendingUp,
  Users,
  Mail
} from "lucide-react";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Quantum background effects */}
      <div className="fixed inset-0 quantum-particles opacity-10 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-screen">
        {/* Header */}
        <QuantumHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Stats Panel - Hidden on mobile */}
          <div className="hidden xl:flex flex-col w-80 p-4 space-y-4 border-r">
            <div className="quantum-card p-4">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-quantum-glow" />
                Quantum Status
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Security Level</span>
                  <SecurityBadge level="quantum" size="sm" />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Encryption</span>
                  <div className="flex items-center gap-1 text-quantum-secure">
                    <Lock className="h-3 w-3" />
                    <span className="text-xs font-medium">AES-256 + QKD</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Quantum Keys</span>
                  <div className="flex items-center gap-1 text-quantum-glow">
                    <Zap className="h-3 w-3" />
                    <span className="text-xs font-medium">1,247 Active</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Threat Level</span>
                  <div className="flex items-center gap-1 text-quantum-particle">
                    <Shield className="h-3 w-3" />
                    <span className="text-xs font-medium">Minimal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-3">
              <Card className="quantum-card p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-quantum-glow/20">
                    <Mail className="h-5 w-5 text-quantum-glow" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">1,247</p>
                    <p className="text-xs text-muted-foreground">Total Messages</p>
                  </div>
                </div>
              </Card>
              
              <Card className="quantum-card p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-quantum-secure/20">
                    <Shield className="h-5 w-5 text-quantum-secure" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-xs text-muted-foreground">Secure Rate</p>
                  </div>
                </div>
              </Card>
              
              <Card className="quantum-card p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-quantum-energy/20">
                    <TrendingUp className="h-5 w-5 text-quantum-energy" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">99.9%</p>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </div>
                </div>
              </Card>
              
              <Card className="quantum-card p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-quantum-particle/20">
                    <Users className="h-5 w-5 text-quantum-particle" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">42</p>
                    <p className="text-xs text-muted-foreground">Active Users</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="quantum-card p-4">
              <h3 className="font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="secure" className="w-full justify-start gap-2">
                  <Shield className="h-4 w-4" />
                  Security Scan
                </Button>
                <Button variant="energy" className="w-full justify-start gap-2">
                  <Zap className="h-4 w-4" />
                  Generate Keys
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Activity className="h-4 w-4" />
                  System Status
                </Button>
              </div>
            </div>
          </div>

          {/* Main Email Interface */}
          <div className="flex-1">
            <EmailList />
          </div>
        </div>
      </div>
      
      {/* Floating quantum effects */}
      <div className="fixed bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-quantum-glow/10 to-quantum-energy/10 animate-float blur-xl pointer-events-none" />
      <div className="fixed top-20 left-1/4 w-24 h-24 rounded-full bg-quantum-particle/10 animate-pulse-quantum blur-lg pointer-events-none" />
    </div>
  );
};

export default Index;