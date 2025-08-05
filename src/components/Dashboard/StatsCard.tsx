import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray';
  trend?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  color = 'gray',
  trend 
}) => {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
    gray: 'text-gray-600'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="text-center">
        <div className={`text-3xl font-bold mb-2 ${colorClasses[color]}`}>
          {typeof value === 'number' && value > 999 ? 
            `₹${value.toLocaleString()}` : 
            value
          }
        </div>
        <div className="text-gray-600 text-sm uppercase tracking-wide font-medium mb-1">
          {title}
        </div>
        {subtitle && (
          <div className="text-xs text-gray-500">{subtitle}</div>
        )}
        {trend && (
          <div className="text-xs text-gray-500 mt-1">{trend}</div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;