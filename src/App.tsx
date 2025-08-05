import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { registerLicense } from '@syncfusion/ej2-base';

// Register Syncfusion license (you'll need to get a license key)
// registerLicense('YOUR_LICENSE_KEY_HERE');

// Import pages
import LibrarianDashboard from './pages/LibrarianDashboard';
import BooksCatalog from './pages/BooksCatalog';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/librarian/dashboard" replace />} />
          
          {/* Librarian Routes */}
          <Route path="/librarian/dashboard" element={<LibrarianDashboard />} />
          <Route path="/librarian/books-catalog" element={<BooksCatalog />} />
          <Route path="/librarian/user-management" element={<UserManagement />} />
          
          {/* Placeholder routes for other pages */}
          <Route path="/librarian/issue-book" element={<div className="p-8 text-center">Issue Book Page - Coming Soon</div>} />
          <Route path="/librarian/return-book" element={<div className="p-8 text-center">Return Book Page - Coming Soon</div>} />
          <Route path="/librarian/collect-payment" element={<div className="p-8 text-center">Collect Payment Page - Coming Soon</div>} />
          <Route path="/librarian/add-book" element={<div className="p-8 text-center">Add Book Page - Coming Soon</div>} />
          <Route path="/librarian/add-member" element={<div className="p-8 text-center">Add Member Page - Coming Soon</div>} />
          <Route path="/librarian/overdue-books" element={<div className="p-8 text-center">Overdue Books Page - Coming Soon</div>} />
          <Route path="/librarian/add-book-copy" element={<div className="p-8 text-center">Add Book Copy Page - Coming Soon</div>} />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/librarian/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;