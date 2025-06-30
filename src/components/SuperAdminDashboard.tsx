
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Users, Building2, CreditCard, TrendingUp, Mail, Plus, Eye, Settings } from 'lucide-react';

const SuperAdminDashboard = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  // Mock data
  const businessData = [
    { name: 'Restaurant Chain A', totalReviews: 1250, avgRating: 4.5, branches: 8, activeCards: 45, sentiment: { positive: 78, neutral: 15, negative: 7 } },
    { name: 'Hotel Group B', totalReviews: 890, avgRating: 4.2, branches: 5, activeCards: 32, sentiment: { positive: 72, neutral: 20, negative: 8 } },
    { name: 'Retail Store C', totalReviews: 2100, avgRating: 4.7, branches: 12, activeCards: 68, sentiment: { positive: 85, neutral: 12, negative: 3 } },
    { name: 'Service Center D', totalReviews: 650, avgRating: 4.1, branches: 3, activeCards: 18, sentiment: { positive: 65, neutral: 25, negative: 10 } },
  ];

  const monthlyData = [
    { month: 'Jan', reviews: 1200, businesses: 45 },
    { month: 'Feb', reviews: 1100, businesses: 48 },
    { month: 'Mar', reviews: 1400, businesses: 52 },
    { month: 'Apr', reviews: 1600, businesses: 55 },
    { month: 'May', reviews: 1800, businesses: 58 },
    { month: 'Jun', reviews: 2100, businesses: 62 },
  ];

  const sentimentData = [
    { name: 'Positive', value: 75, color: '#22c55e' },
    { name: 'Neutral', value: 18, color: '#f59e0b' },
    { name: 'Negative', value: 7, color: '#ef4444' },
  ];

  const cardAllocationData = [
    { business: 'Restaurant A', allocated: 45, active: 42, inactive: 3 },
    { business: 'Hotel B', allocated: 32, active: 30, inactive: 2 },
    { business: 'Retail C', allocated: 68, active: 65, inactive: 3 },
    { business: 'Service D', allocated: 18, active: 16, inactive: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">Super Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage businesses, analytics, and NFC cards</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Create Business
            </Button>
            <Button variant="outline">
              <CreditCard className="w-4 h-4 mr-2" />
              Manage NFC Cards
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Businesses</CardTitle>
              <Building2 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">62</div>
              <p className="text-xs text-muted-foreground">+4 from last month</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-accent">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,890</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active NFC Cards</CardTitle>
              <CreditCard className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">163</div>
              <p className="text-xs text-muted-foreground">+8 allocated this week</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.4</div>
              <p className="text-xs text-muted-foreground">+0.2 from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="businesses">Businesses</TabsTrigger>
            <TabsTrigger value="nfc-cards">NFC Cards</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Review Trends</CardTitle>
                  <CardDescription>Reviews collected over the past 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="reviews" stroke="#0050D5" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Overall Sentiment Analysis</CardTitle>
                  <CardDescription>Distribution of review sentiments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Business Performance Comparison</CardTitle>
                <CardDescription>Review volume by business</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={businessData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="totalReviews" fill="#0050D5" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="businesses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Management</CardTitle>
                <CardDescription>View and manage all registered businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {businessData.map((business, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{business.name}</h3>
                        <div className="flex items-center space-x-6 mt-2 text-sm text-muted-foreground">
                          <span>{business.branches} branches</span>
                          <span>{business.totalReviews} reviews</span>
                          <span>{business.avgRating}⭐ average</span>
                          <span>{business.activeCards} active cards</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge className="bg-green-100 text-green-800">
                            {business.sentiment.positive}% Positive
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800">
                            {business.sentiment.neutral}% Neutral
                          </Badge>
                          <Badge className="bg-red-100 text-red-800">
                            {business.sentiment.negative}% Negative
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4 mr-1" />
                          Send Credentials
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="w-4 h-4 mr-1" />
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nfc-cards" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>NFC Card Allocation</CardTitle>
                <CardDescription>Manage NFC card distribution across businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={cardAllocationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="business" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="active" fill="#22c55e" name="Active Cards" />
                    <Bar dataKey="inactive" fill="#ef4444" name="Inactive Cards" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Card Allocation Requests</CardTitle>
                <CardDescription>Pending requests from businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Restaurant Chain A</h4>
                      <p className="text-sm text-muted-foreground">Requesting 25 additional cards</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">Approve</Button>
                      <Button size="sm" variant="outline">Decline</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Hotel Group B</h4>
                      <p className="text-sm text-muted-foreground">Requesting 15 additional cards</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">Approve</Button>
                      <Button size="sm" variant="outline">Decline</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure platform-wide settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Email Configuration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button>Configure SMTP Settings</Button>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Platform Analytics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button>View System Reports</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
