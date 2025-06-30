
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Building2, Users, Star, TrendingUp, Plus, Eye, CreditCard, MapPin } from 'lucide-react';

const BusinessOwnerDashboard = () => {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedStaff, setSelectedStaff] = useState('all');

  // Mock data
  const branchData = [
    { name: 'Downtown Branch', reviews: 450, avgRating: 4.6, staff: 8, activeCards: 12, sentiment: { positive: 82, neutral: 12, negative: 6 } },
    { name: 'Mall Branch', reviews: 380, avgRating: 4.3, staff: 6, activeCards: 9, sentiment: { positive: 75, neutral: 18, negative: 7 } },
    { name: 'Airport Branch', reviews: 290, avgRating: 4.1, staff: 5, activeCards: 8, sentiment: { positive: 68, neutral: 22, negative: 10 } },
    { name: 'Suburban Branch', reviews: 320, avgRating: 4.5, staff: 7, activeCards: 10, sentiment: { positive: 79, neutral: 15, negative: 6 } },
  ];

  const staffPerformance = [
    { name: 'John Smith', branch: 'Downtown', reviews: 85, avgRating: 4.7, cardsUsed: 3, sentiment: { positive: 88, neutral: 8, negative: 4 } },
    { name: 'Sarah Johnson', branch: 'Downtown', reviews: 72, avgRating: 4.5, cardsUsed: 2, sentiment: { positive: 81, neutral: 12, negative: 7 } },
    { name: 'Mike Wilson', branch: 'Mall', reviews: 68, avgRating: 4.4, cardsUsed: 2, sentiment: { positive: 77, neutral: 15, negative: 8 } },
    { name: 'Lisa Brown', branch: 'Mall', reviews: 79, avgRating: 4.6, cardsUsed: 3, sentiment: { positive: 84, neutral: 11, negative: 5 } },
    { name: 'David Lee', branch: 'Airport', reviews: 55, avgRating: 4.2, cardsUsed: 2, sentiment: { positive: 70, neutral: 20, negative: 10 } },
    { name: 'Emma Davis', branch: 'Suburban', reviews: 91, avgRating: 4.8, cardsUsed: 3, sentiment: { positive: 92, neutral: 6, negative: 2 } },
  ];

  const monthlyTrends = [
    { month: 'Jan', reviews: 1200, avgRating: 4.3 },
    { month: 'Feb', reviews: 1100, avgRating: 4.4 },
    { month: 'Mar', reviews: 1400, avgRating: 4.5 },
    { month: 'Apr', reviews: 1600, avgRating: 4.4 },
    { month: 'May', reviews: 1800, avgRating: 4.6 },
    { month: 'Jun', reviews: 1440, avgRating: 4.5 },
  ];

  const overallSentiment = [
    { name: 'Positive', value: 76, color: '#22c55e' },
    { name: 'Neutral', value: 17, color: '#f59e0b' },
    { name: 'Negative', value: 7, color: '#ef4444' },
  ];

  const getFilteredData = () => {
    if (selectedBranch === 'all') return branchData;
    return branchData.filter(branch => branch.name === selectedBranch);
  };

  const getFilteredStaff = () => {
    if (selectedBranch === 'all') return staffPerformance;
    return staffPerformance.filter(staff => staff.branch === selectedBranch);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">Business Owner Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage your branches, staff, and review analytics</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Branch
            </Button>
            <Button variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Manage Staff
            </Button>
            <Button variant="outline">
              <CreditCard className="w-4 h-4 mr-2" />
              Allocate Cards
            </Button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Branch:</label>
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Branches</SelectItem>
                {branchData.map((branch) => (
                  <SelectItem key={branch.name} value={branch.name}>
                    {branch.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Branches</CardTitle>
              <Building2 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{branchData.length}</div>
              <p className="text-xs text-muted-foreground">+1 this quarter</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-accent">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,440</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.5</div>
              <p className="text-xs text-muted-foreground">+0.1 from last month</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Staff</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">26</div>
              <p className="text-xs text-muted-foreground">Across all branches</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="branches">Branches</TabsTrigger>
            <TabsTrigger value="staff">Staff Performance</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Review Trends</CardTitle>
                  <CardDescription>Reviews and ratings over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Bar yAxisId="left" dataKey="reviews" fill="#0050D5" />
                      <Line yAxisId="right" type="monotone" dataKey="avgRating" stroke="#ffaa01" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Overall Sentiment</CardTitle>
                  <CardDescription>Customer sentiment across all branches</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={overallSentiment}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {overallSentiment.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="branches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Branch Performance</CardTitle>
                <CardDescription>Overview of all branch locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {getFilteredData().map((branch, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-primary" />
                          <h3 className="font-semibold text-lg">{branch.name}</h3>
                        </div>
                        <div className="flex items-center space-x-6 mt-2 text-sm text-muted-foreground">
                          <span>{branch.reviews} reviews</span>
                          <span>{branch.avgRating}⭐ average</span>
                          <span>{branch.staff} staff members</span>
                          <span>{branch.activeCards} active cards</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge className="bg-green-100 text-green-800">
                            {branch.sentiment.positive}% Positive
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800">
                            {branch.sentiment.neutral}% Neutral
                          </Badge>
                          <Badge className="bg-red-100 text-red-800">
                            {branch.sentiment.negative}% Negative
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Users className="w-4 h-4 mr-1" />
                          Manage Staff
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staff" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Staff Performance</CardTitle>
                <CardDescription>Individual staff member performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {getFilteredStaff().map((staff, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{staff.name}</h3>
                            <p className="text-sm text-muted-foreground">{staff.branch}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 mt-2 text-sm text-muted-foreground">
                          <span>{staff.reviews} reviews collected</span>
                          <span>{staff.avgRating}⭐ average rating</span>
                          <span>{staff.cardsUsed} cards assigned</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge className="bg-green-100 text-green-800">
                            {staff.sentiment.positive}% Positive
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800">
                            {staff.sentiment.neutral}% Neutral
                          </Badge>
                          <Badge className="bg-red-100 text-red-800">
                            {staff.sentiment.negative}% Negative
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <CreditCard className="w-4 h-4 mr-1" />
                          Assign Cards
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Branch Performance Comparison</CardTitle>
                  <CardDescription>Review volume by branch</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={branchData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="reviews" fill="#0050D5" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Staff</CardTitle>
                <CardDescription>Staff members with highest review collection</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={staffPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="reviews" fill="#ffaa01" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BusinessOwnerDashboard;
