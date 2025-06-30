
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, Star, TrendingUp, Plus, Eye, CreditCard, MapPin, UserPlus, Mail } from 'lucide-react';

const BranchManagerDashboard = () => {
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [showRequestCards, setShowRequestCards] = useState(false);

  // Mock data for Downtown Branch
  const branchInfo = {
    name: 'Downtown Branch',
    address: '123 Main Street, Downtown',
    totalReviews: 450,
    avgRating: 4.6,
    staffCount: 8,
    activeCards: 12,
    sentiment: { positive: 82, neutral: 12, negative: 6 }
  };

  const staffData = [
    { name: 'John Smith', reviews: 85, avgRating: 4.7, cardsAssigned: 3, status: 'Active', sentiment: { positive: 88, neutral: 8, negative: 4 } },
    { name: 'Sarah Johnson', reviews: 72, avgRating: 4.5, cardsAssigned: 2, status: 'Active', sentiment: { positive: 81, neutral: 12, negative: 7 } },
    { name: 'Mike Wilson', reviews: 68, avgRating: 4.4, cardsAssigned: 2, status: 'Active', sentiment: { positive: 77, neutral: 15, negative: 8 } },
    { name: 'Lisa Brown', reviews: 79, avgRating: 4.6, cardsAssigned: 3, status: 'Active', sentiment: { positive: 84, neutral: 11, negative: 5 } },
    { name: 'David Lee', reviews: 55, avgRating: 4.2, cardsAssigned: 2, status: 'Active', sentiment: { positive: 70, neutral: 20, negative: 10 } },
    { name: 'Emma Davis', reviews: 91, avgRating: 4.8, cardsAssigned: 3, status: 'Active', sentiment: { positive: 92, neutral: 6, negative: 2 } },
  ];

  const monthlyData = [
    { month: 'Jan', reviews: 65, avgRating: 4.4 },
    { month: 'Feb', reviews: 58, avgRating: 4.5 },
    { month: 'Mar', reviews: 72, avgRating: 4.6 },
    { month: 'Apr', reviews: 78, avgRating: 4.5 },
    { month: 'May', reviews: 85, avgRating: 4.7 },
    { month: 'Jun', reviews: 92, avgRating: 4.6 },
  ];

  const branchSentiment = [
    { name: 'Positive', value: 82, color: '#22c55e' },
    { name: 'Neutral', value: 12, color: '#f59e0b' },
    { name: 'Negative', value: 6, color: '#ef4444' },
  ];

  const weeklyPerformance = [
    { day: 'Mon', reviews: 12 },
    { day: 'Tue', reviews: 18 },
    { day: 'Wed', reviews: 15 },
    { day: 'Thu', reviews: 22 },
    { day: 'Fri', reviews: 25 },
    { day: 'Sat', reviews: 28 },
    { day: 'Sun', reviews: 20 },
  ];

  const cardRequests = [
    { staffName: 'John Smith', cardsRequested: 2, reason: 'Peak season coverage', date: '2024-06-25', status: 'Pending' },
    { staffName: 'Sarah Johnson', cardsRequested: 1, reason: 'Replacement for damaged card', date: '2024-06-24', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">Branch Manager Dashboard</h1>
            <div className="flex items-center space-x-2 mt-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <p className="text-muted-foreground">{branchInfo.name} - {branchInfo.address}</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Dialog open={showAddStaff} onOpenChange={setShowAddStaff}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Staff
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Staff Member</DialogTitle>
                  <DialogDescription>
                    Create a new staff account for your branch
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Input id="position" placeholder="Enter job position" />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowAddStaff(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setShowAddStaff(false)}>
                      Create Staff Account
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog open={showRequestCards} onOpenChange={setShowRequestCards}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Request Cards
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Request NFC Cards</DialogTitle>
                  <DialogDescription>
                    Request additional NFC cards from business owner
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="staffSelect">Staff Member</Label>
                    <select className="w-full p-2 border rounded">
                      <option>Select staff member</option>
                      {staffData.map((staff) => (
                        <option key={staff.name} value={staff.name}>{staff.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardCount">Number of Cards</Label>
                    <Input id="cardCount" type="number" placeholder="Enter number of cards needed" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason</Label>
                    <Input id="reason" placeholder="Enter reason for request" />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowRequestCards(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setShowRequestCards(false)}>
                      Submit Request
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{branchInfo.totalReviews}</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-accent">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{branchInfo.avgRating}</div>
              <p className="text-xs text-muted-foreground">+0.2 from last month</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Staff</CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{branchInfo.staffCount}</div>
              <p className="text-xs text-muted-foreground">All staff members</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Cards</CardTitle>
              <CreditCard className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{branchInfo.activeCards}</div>
              <p className="text-xs text-muted-foreground">NFC cards in use</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="staff">Staff Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="requests">Card Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                  <CardDescription>Reviews and ratings over the past 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
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
                  <CardTitle>Customer Sentiment</CardTitle>
                  <CardDescription>Review sentiment distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={branchSentiment}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {branchSentiment.map((entry, index) => (
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
                <CardTitle>Weekly Review Collection</CardTitle>
                <CardDescription>Daily review volume for this week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="reviews" fill="#0050D5" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staff" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Staff Performance</CardTitle>
                <CardDescription>Individual staff member metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {staffData.map((staff, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{staff.name}</h3>
                            <p className="text-sm text-muted-foreground">Status: {staff.status}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 mt-2 text-sm text-muted-foreground">
                          <span>{staff.reviews} reviews</span>
                          <span>{staff.avgRating}⭐ avg rating</span>
                          <span>{staff.cardsAssigned} cards assigned</span>
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
                          <Mail className="w-4 h-4 mr-1" />
                          Send Message
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Staff Performance Comparison</CardTitle>
                <CardDescription>Review collection by staff member</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={staffData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="reviews" fill="#0050D5" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>Staff with highest ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {staffData
                      .sort((a, b) => b.avgRating - a.avgRating)
                      .slice(0, 3)
                      .map((staff, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-primary">{index + 1}</span>
                            </div>
                            <div>
                              <p className="font-semibold">{staff.name}</p>
                              <p className="text-sm text-muted-foreground">{staff.reviews} reviews</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">{staff.avgRating}⭐</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Most Active Staff</CardTitle>
                  <CardDescription>Staff with most reviews collected</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {staffData
                      .sort((a, b) => b.reviews - a.reviews)
                      .slice(0, 3)
                      .map((staff, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-accent">{index + 1}</span>
                            </div>
                            <div>
                              <p className="font-semibold">{staff.name}</p>
                              <p className="text-sm text-muted-foreground">{staff.avgRating}⭐ avg rating</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">{staff.reviews}</p>
                            <p className="text-sm text-muted-foreground">reviews</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>NFC Card Requests</CardTitle>
                <CardDescription>Pending requests to business owner</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cardRequests.map((request, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{request.staffName}</h3>
                        <p className="text-sm text-muted-foreground">{request.reason}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <span>Cards requested: {request.cardsRequested}</span>
                          <span>Date: {request.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                
                {cardRequests.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <CreditCard className="w-12 h-12 mx-auto mb-4" />
                    <p>No pending card requests</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BranchManagerDashboard;
