import React from 'react';
import Layout from '../components/Layout/Layout';
import StatsCard from '../components/Dashboard/StatsCard';
import QuickActions from '../components/Dashboard/QuickActions';
import { mockDashboardStats } from '../data/mockData';

const LibrarianDashboard: React.FC = () => {
  const quickActions = [
    {
      title: 'Issue Book',
      description: 'Issue book to member',
      link: '/librarian/issue-book',
      color: 'text-blue-600'
    },
    {
      title: 'Return Book',
      description: 'Process book return',
      link: '/librarian/return-book',
      color: 'text-green-600'
    },
    {
      title: 'Collect Payment',
      description: 'Monthly fees & fines',
      link: '/librarian/collect-payment',
      color: 'text-purple-600'
    },
    {
      title: 'Add New Book',
      description: 'Register new title',
      link: '/librarian/add-book',
      color: 'text-indigo-600'
    },
    {
      title: 'Add Member',
      description: 'Register new user',
      link: '/librarian/add-member',
      color: 'text-teal-600'
    },
    {
      title: 'Overdue Books',
      description: 'View late returns',
      link: '/librarian/overdue-books',
      color: 'text-red-600'
    }
  ];

  const recentActivities = [
    {
      time: '10:45 AM',
      description: 'Collected ₹500 monthly fee from John Doe (ID: 1234)'
    },
    {
      time: '10:30 AM',
      description: 'Issued "Clean Code" to Member #1087'
    },
    {
      time: '10:15 AM',
      description: 'Processed return: "JavaScript: The Good Parts" with ₹10 fine'
    },
    {
      time: '09:45 AM',
      description: 'Added new book: "Design Patterns" (5 copies)'
    },
    {
      time: '09:30 AM',
      description: 'Registered new member: Alice Smith'
    }
  ];

  const pendingTasks = [
    {
      title: 'Collect overdue fines',
      meta: '3 books, ₹85 total',
      priority: 'high'
    },
    {
      title: 'Follow up on unpaid fees',
      meta: '5 members',
      priority: 'medium'
    },
    {
      title: 'Organize Rack 3',
      meta: 'Programming section',
      priority: 'low'
    },
    {
      title: 'Update book catalog',
      meta: '12 new additions',
      priority: 'low'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout 
      title="Librarian Dashboard" 
      userRole="librarian" 
      userName="Sarah Johnson"
    >
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back, Sarah!</h1>
        <p className="text-gray-600">Here's your library overview for today, August 3rd, 2025</p>
      </div>

      {/* Alerts */}
      <div className="mb-8 space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
          <div className="text-red-600 text-xl">🚨</div>
          <div>
            <strong className="text-red-800">Urgent:</strong>
            <span className="text-red-700 ml-1">
              3 books are overdue and need immediate attention for fine collection.
            </span>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
          <div className="text-yellow-600 text-xl">⚠️</div>
          <div>
            <strong className="text-yellow-800">Notice:</strong>
            <span className="text-yellow-700 ml-1">
              5 members have unpaid monthly fees due today.
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        <StatsCard 
          title="Total Books in Library" 
          value={mockDashboardStats.totalBooks} 
          subtitle="+12 added this month"
          color="gray"
        />
        <StatsCard 
          title="Currently Issued" 
          value={mockDashboardStats.currentlyIssued} 
          subtitle="15 due this week"
          color="blue"
        />
        <StatsCard 
          title="Available Copies" 
          value={mockDashboardStats.availableCopies} 
          subtitle="Ready for issue"
          color="green"
        />
        <StatsCard 
          title="Overdue Books" 
          value={mockDashboardStats.overdueBooks} 
          subtitle="Need immediate action"
          color="red"
        />
        <StatsCard 
          title="Active Members" 
          value={mockDashboardStats.totalMembers} 
          subtitle="2 new this week"
          color="purple"
        />
        <StatsCard 
          title="Today's Collections" 
          value={mockDashboardStats.todayCollections} 
          subtitle="Fees + Fines"
          color="green"
        />
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Panel */}
        <div className="lg:col-span-2 space-y-8">
          <QuickActions actions={quickActions} />

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex space-x-4 p-3 border-b border-gray-100 last:border-b-0">
                  <div className="text-gray-500 text-sm min-w-16">{activity.time}</div>
                  <div className="text-gray-700 text-sm">{activity.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Panel */}
        <div className="space-y-6">
          {/* Pending Tasks */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Pending Tasks
            </h2>
            <div className="space-y-4">
              {pendingTasks.map((task, index) => (
                <div key={index} className="flex justify-between items-start p-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 mb-1">{task.title}</div>
                    <div className="text-sm text-gray-500">{task.meta}</div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Quick Stats
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Books Due Today:</span>
                <strong className="text-gray-900">7</strong>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Payment Due:</span>
                <strong className="text-yellow-600">5 members</strong>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Total Fines:</span>
                <strong className="text-red-600">₹85</strong>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Available Books:</span>
                <strong className="text-green-600">158</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LibrarianDashboard;