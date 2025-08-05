import React from 'react';
import { Link } from 'react-router-dom';

interface QuickAction {
  title: string;
  description: string;
  link: string;
  color: string;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className={`p-4 border-2 border-gray-200 rounded-lg text-center transition-all duration-200 hover:border-gray-900 hover:bg-gray-50 ${action.color}`}
          >
            <h3 className="font-medium text-gray-900 mb-2">{action.title}</h3>
            <p className="text-sm text-gray-600">{action.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;