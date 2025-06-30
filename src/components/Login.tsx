
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, EyeOff, Smartphone, TrendingUp } from 'lucide-react';

interface LoginProps {
  onLogin: (role: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role) {
      onLogin(role);
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-primary mb-2">ReviewTap</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              NFC Review Collection Platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Login As</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="super-admin">Super Admin</SelectItem>
                    <SelectItem value="business-owner">Business Owner</SelectItem>
                    <SelectItem value="branch-manager">Branch Manager</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              <Button type="submit" className="w-full h-12 text-lg font-semibold">
                Sign In
              </Button>
            </form>
            
            <div className="text-center">
              <Button variant="link" className="text-primary hover:text-accent">
                Forgot Password?
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center text-white/90 mb-4">
            <TrendingUp className="w-5 h-5 mr-2" />
            <span className="text-sm">Powered by NFC Technology</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
