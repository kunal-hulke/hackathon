import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import Layout from '../components/Layout/Layout';
import StatsCard from '../components/Dashboard/StatsCard';
import { mockMembers } from '../data/mockData';
import { Member } from '../types';

const UserManagement: React.FC = () => {
  const [members] = useState<Member[]>(mockMembers);

  const statusOptions = [
    { text: 'All Members', value: 'all' },
    { text: 'Active', value: 'active' },
    { text: 'Payment Overdue', value: 'overdue' },
    { text: 'New Members', value: 'new' }
  ];

  const paymentOptions = [
    { text: 'All Status', value: 'all' },
    { text: 'Current', value: 'current' },
    { text: 'Due Soon', value: 'due' },
    { text: 'Overdue', value: 'overdue' }
  ];

  const getStatusBadge = (status: string) => {
    const classes = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      suspended: 'bg-red-100 text-red-800'
    };
    return classes[status as keyof typeof classes] || classes.active;
  };

  const getPaymentStatusColor = (status: string) => {
    const classes = {
      current: 'text-green-600',
      due: 'text-yellow-600',
      overdue: 'text-red-600'
    };
    return classes[status as keyof typeof classes] || classes.current;
  };

  const formatPaymentStatus = (member: Member) => {
    if (member.paymentStatus === 'current') {
      return `Current (${new Date(member.lastPayment!).toLocaleDateString()})`;
    } else if (member.paymentStatus === 'due') {
      return `Due ${new Date(member.nextDueDate!).toLocaleDateString()}`;
    } else {
      return `Overdue (${new Date(member.lastPayment!).toLocaleDateString()})`;
    }
  };

  const memberActionTemplate = (props: Member) => {
    return (
      <div className="flex space-x-2">
        <ButtonComponent 
          cssClass="e-small e-outline"
          onClick={() => console.log('View member', props.id)}
        >
          View
        </ButtonComponent>
        {props.paymentStatus === 'overdue' || props.paymentStatus === 'due' ? (
          <ButtonComponent 
            cssClass="e-small e-primary"
            onClick={() => console.log('Collect payment', props.id)}
          >
            Collect Fee
          </ButtonComponent>
        ) : (
          <ButtonComponent 
            cssClass="e-small e-outline"
            onClick={() => console.log('Edit member', props.id)}
          >
            Edit
          </ButtonComponent>
        )}
      </div>
    );
  };

  return (
    <Layout 
      title="User Management" 
      showBackButton 
      backTo="/librarian/dashboard"
      userRole="librarian" 
      userName="Sarah Johnson"
    >
      {/* Page Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">User Management</h1>
          <p className="text-gray-600">Manage library members and their account status</p>
        </div>
        <Link to="/librarian/add-member">
          <ButtonComponent cssClass="e-primary">+ Add New Member</ButtonComponent>
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Members" value={45} color="gray" />
        <StatsCard title="Active Members" value={38} color="green" />
        <StatsCard title="Payment Due" value={5} color="yellow" />
        <StatsCard title="New This Month" value={2} color="blue" />
      </div>

      {/* Filters Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Members</label>
            <TextBoxComponent placeholder="Name, email, or phone..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Status</label>
            <DropDownListComponent 
              dataSource={statusOptions}
              fields={{ text: 'text', value: 'value' }}
              value="all"
              placeholder="All Members"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Status</label>
            <DropDownListComponent 
              dataSource={paymentOptions}
              fields={{ text: 'text', value: 'value' }}
              value="all"
              placeholder="All Status"
            />
          </div>
          <div>
            <ButtonComponent cssClass="e-primary" onClick={() => console.log('Apply filters')}>
              Apply Filters
            </ButtonComponent>
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Library Members</h2>
          <span className="text-sm text-gray-500">Showing {members.length} total members</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Member ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Member Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Books Issued
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <strong className="text-gray-900">{member.id}</strong>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {member.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {new Date(member.joinDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`font-medium ${getPaymentStatusColor(member.paymentStatus)}`}>
                      {formatPaymentStatus(member)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {member.booksIssued} books
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${getStatusBadge(member.status)}`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {memberActionTemplate(member)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-500">Showing 1-{members.length} of {members.length} members</div>
          <div className="flex space-x-2">
            <ButtonComponent cssClass="e-small e-outline">Previous</ButtonComponent>
            <ButtonComponent cssClass="e-small e-primary">1</ButtonComponent>
            <ButtonComponent cssClass="e-small e-outline">2</ButtonComponent>
            <ButtonComponent cssClass="e-small e-outline">3</ButtonComponent>
            <ButtonComponent cssClass="e-small e-outline">Next</ButtonComponent>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserManagement;