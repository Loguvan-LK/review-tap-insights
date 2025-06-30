
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Star, TrendingUp, CreditCard, Calendar, Award, Target, Clock, MapPin } from 'lucide-react';

const StaffDashboard = () => {
  // Mock data for John Smith - Staff Member
  const staffInfo = {
    name: 'John Smith',
    position: 'Senior Staff',
    branch: 'Downtown Branch',
    employeeId: 'EMP001',
    joinDate: '2023-01-15',
    totalReviews: 85,
    avgRating: 4.7,
    cardsAssigned: 3,
    status: 'Active'
  };

  const personalPerformance = {
    thisMonth: { reviews: 15, avgRating: 4.8 },
    lastMonth: { reviews: 12, avgRating: 4.6 },
    thisWeek: { reviews: 4, avgRating: 4.9 },
    today: { reviews: 1, avgRating: 5.0 }
  };

  const monthlyData = [
    { month: 'Jan', reviews: 12, avgRating: 4.5 },
    { month: 'Feb', reviews: 10, avgRating: 4.6 },
    { month: 'Mar', reviews: 14, avgRating: 4.7 },
    { month: 'Apr', reviews: 16, avgRating: 4.6 },
    { month: 'May', reviews: 18, avgRating: 4.8 },
    { month: 'Jun', reviews: 15, avgRating: 4.7 },
  ];

  const weeklyData = [
    { day: 'Mon', reviews: 2 },
    { day: 'Tue', reviews: 3 },
    { day: 'Wed', reviews: 1 },
    { day: 'Thu', reviews: 4 },
    { day: 'Fri', reviews: 3 },
    { day: 'Sat', reviews: 2 },
    { day: 'Sun', reviews: 1 },
  ];

  const sentimentData = [
    { name: 'Positive', value: 88, color: '#22c55e' },
    { name: 'Neutral', value: 8, color: '#f59e0b' },
    { name: 'Negative', value: 4, color: '#ef4444' },
  ];

  // Branch overview data
  const branchOverview = {
    totalReviews: 450,
    avgRating: 4.6,
    totalStaff: 8,
    myRanking: 1,
    sentiment: { positive: 82, neutral: 12, negative: 6 }
  };

  const recentReviews = [
    { date: '2024-06-28', rating: 5, comment: 'Excellent service, very helpful staff!', sentiment: 'positive' },
    { date: '2024-06-27', rating: 4, comment: 'Good experience, quick service.', sentiment: 'positive' },
    { date: '2024-06-26', rating: 5, comment: 'Outstanding customer service!', sentiment: 'positive' },
    { date: '2024-06-25', rating: 4, comment: 'Professional and friendly.', sentiment: 'positive' },
    { date: '2024-06-24', rating: 3, comment: 'Average service, could be better.', sentiment: 'neutral' },
  ];

  const achievements = [
    { title: 'Top Performer', description: 'Highest rating this month', icon: Award, color: 'text-yellow-500' },
    { title: '50+ Reviews', description: 'Collected 50+ reviews', icon: Target, color: 'text-blue-500' },
    { title: 'Consistent Quality', description: '4.5+ rating for 3 months', icon: Star, color: 'text-green-500' },
    { title: 'Early Adopter', description: 'Using NFC cards since launch', icon: CreditCard, color: 'text-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">My Dashboard</h1>
            <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
              <span className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{staffInfo.branch}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Joined {staffInfo.joinDate}</span>
              </span>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold">{staffInfo.name}</h2>
            <p className="text-muted-foreground">{staffInfo.position}</p>
            <Badge className="mt-2 bg-green-100 text-green-800">{staffInfo.status}</Badge>
          </div>
        </div>

        {/* Performance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{staffInfo.totalReviews}</div>
              <p className="text-xs text-muted-foreground">+{personalPerformance.thisMonth.reviews} this month</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-accent">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{staffInfo.avgRating}</div>
              <p className="text-xs text-muted-foreground">+0.1 from last month</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Branch Ranking</CardTitle>
              <Award className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{branchOverview.myRanking}</div>
              <p className="text-xs text-muted-foreground">out of {branchOverview.totalStaff} staff</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">NFC Cards</CardTitle>
              <CreditCard className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{staffInfo.cardsAssigned}</div>
              <p className="text-xs text-muted-foreground">Cards assigned</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">My Performance</TabsTrigger>
            <TabsTrigger value="branch">Branch Overview</TabsTrigger>
            <TabsTrigger value="reviews">Recent Reviews</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                  <CardDescription>Your review collection over the past 6 months</CardDescription>
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
                  <CardTitle>Review Sentiment</CardTitle>
                  <CardDescription>Distribution of customer feedback</CardDescription>
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
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Reviews collected this week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="reviews" fill="#0050D5" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{personalPerformance.thisWeek.reviews}</div>
                  <p className="text-xs text-muted-foreground">{personalPerformance.thisWeek.avgRating}⭐ avg</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{personalPerformance.thisMonth.reviews}</div>
                  <p className="text-xs text-muted-foreground">{personalPerformance.thisMonth.avgRating}⭐ avg</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Last Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{personalPerformance.lastMonth.reviews}</div>
                  <p className="text-xs text-muted-foreground">{personalPerformance.lastMonth.avgRating}⭐ avg</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{personalPerformance.today.reviews}</div>
                  <p className="text-xs text-muted-foreground">{personalPerformance.today.avgRating}⭐ avg</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="branch" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Branch Performance Overview</CardTitle>
                <CardDescription>{staffInfo.branch} - Overall statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-primary/5 rounded-lg">
                    <div className="text-3xl font-bold text-primary">{branchOverview.totalReviews}</div>
                    <p className="text-sm text-muted-foreground mt-1">Total Reviews</p>
                  </div>
                  <div className="text-center p-6 bg-accent/5 rounded-lg">
                    <div className="text-3xl font-bold text-accent">{branchOverview.avgRating}</div>
                    <p className="text-sm text-muted-foreground mt-1">Average Rating</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">{branchOverview.totalStaff}</div>
                    <p className="text-sm text-muted-foreground mt-1">Total Staff</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Branch Sentiment Analysis</h3>
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-green-100 text-green-800">
                      {branchOverview.sentiment.positive}% Positive
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      {branchOverview.sentiment.neutral}% Neutral
                    </Badge>
                    <Badge className="bg-red-100 text-red-800">
                      {branchOverview.sentiment.negative}% Negative
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>My Contribution</CardTitle>
                <CardDescription>Your impact on branch performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-semibold">Review Contribution</p>
                      <p className="text-sm text-muted-foreground">Your share of total branch reviews</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {((staffInfo.totalReviews / branchOverview.totalReviews) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <div>
                      <p className="font-semibold">Performance Ranking</p>
                      <p className="text-sm text-muted-foreground">Your position among branch staff</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">
                        #{branchOverview.myRanking} / {branchOverview.totalStaff}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Customer Reviews</CardTitle>
                <CardDescription>Latest feedback from customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReviews.map((review, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                        <Badge
                          className={
                            review.sentiment === 'positive'
                              ? 'bg-green-100 text-green-800'
                              : review.sentiment === 'neutral'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }
                        >
                          {review.sentiment}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Milestones and recognition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${achievement.color}`}>
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Performance Goals</CardTitle>
                <CardDescription>Targets to achieve</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-semibold">Monthly Review Target</p>
                      <p className="text-sm text-muted-foreground">Collect 20 reviews this month</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {personalPerformance.thisMonth.reviews}/20
                      </div>
                      <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${(personalPerformance.thisMonth.reviews / 20) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-semibold">Rating Consistency</p>
                      <p className="text-sm text-muted-foreground">Maintain 4.5+ rating</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        {staffInfo.avgRating}/5.0
                      </div>
                      <Badge className="mt-1 bg-green-100 text-green-800">
                        Achieved ✓
                      </Badge>
                    </div>
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

export default StaffDashboard;
