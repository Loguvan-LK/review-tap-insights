
import React, { useState } from 'react';
import Login from '@/components/Login';
import SuperAdminDashboard from '@/components/SuperAdminDashboard';
import BusinessOwnerDashboard from '@/components/BusinessOwnerDashboard';
import BranchManagerDashboard from '@/components/BranchManagerDashboard';
import StaffDashboard from '@/components/StaffDashboard';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const Index = () => {
  const [currentRole, setCurrentRole] = useState<string | null>(null);

  const handleLogin = (role: string) => {
    setCurrentRole(role);
  };

  const handleLogout = () => {
    setCurrentRole(null);
  };

  const renderDashboard = () => {
    switch (currentRole) {
      case 'super-admin':
        return <SuperAdminDashboard />;
      case 'business-owner':
        return <BusinessOwnerDashboard />;
      case 'branch-manager':
        return <BranchManagerDashboard />;
      case 'staff':
        return <StaffDashboard />;
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen">
      {currentRole && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      )}
      {renderDashboard()}
    </div>
  );
};

export default Index;
