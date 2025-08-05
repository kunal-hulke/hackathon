import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import Layout from '../components/Layout/Layout';
import StatsCard from '../components/Dashboard/StatsCard';
import { mockBooks, subjects, rackLocations } from '../data/mockData';
import { Book } from '../types';

const BooksCatalog: React.FC = () => {
  const [books] = useState<Book[]>(mockBooks);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(mockBooks);

  const subjectOptions = [
    { text: 'All Subjects', value: 'all' },
    ...subjects.map(subject => ({ text: subject, value: subject.toLowerCase() }))
  ];

  const availabilityOptions = [
    { text: 'All Books', value: 'all' },
    { text: 'Available', value: 'available' },
    { text: 'Out of Stock', value: 'out-of-stock' }
  ];

  const rackOptions = [
    { text: 'All Racks', value: 'all' },
    ...rackLocations.map(rack => ({ text: rack, value: rack.toLowerCase().replace(' ', '') }))
  ];

  const handleSearch = (searchTerm: string) => {
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm)
    );
    setFilteredBooks(filtered);
  };

  const bookTemplate = (props: Book) => {
    return (
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gray-900 hover:shadow-lg transition-all duration-200">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{props.title}</h3>
          <p className="text-gray-600 italic mb-2">by {props.author}</p>
          <span className="inline-block px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-xs text-gray-700">
            {props.subject}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">ISBN</div>
            <div className="font-medium text-gray-900">{props.isbn}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Price</div>
            <div className="font-medium text-gray-900">₹{props.price.toLocaleString()}</div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-gray-900">{props.totalCopies}</div>
              <div className="text-xs text-gray-500 uppercase">Total</div>
            </div>
            <div>
              <div className="text-xl font-bold text-green-600">{props.availableCopies}</div>
              <div className="text-xs text-gray-500 uppercase">Available</div>
            </div>
            <div>
              <div className="text-xl font-bold text-red-600">{props.issuedCopies}</div>
              <div className="text-xs text-gray-500 uppercase">Issued</div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <ButtonComponent cssClass="e-small e-outline" onClick={() => console.log('View book', props.id)}>
            View
          </ButtonComponent>
          <ButtonComponent cssClass="e-small e-outline" onClick={() => console.log('Edit book', props.id)}>
            Edit
          </ButtonComponent>
          {props.availableCopies > 0 ? (
            <ButtonComponent cssClass="e-small e-outline" onClick={() => console.log('Manage copies', props.id)}>
              Copies
            </ButtonComponent>
          ) : (
            <ButtonComponent cssClass="e-small e-primary" onClick={() => console.log('Add copy', props.id)}>
              Add Copy
            </ButtonComponent>
          )}
        </div>
      </div>
    );
  };

  return (
    <Layout 
      title="Books Catalog" 
      showBackButton 
      backTo="/librarian/dashboard"
      userRole="librarian" 
      userName="Sarah Johnson"
    >
      {/* Page Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Books Catalog</h1>
          <p className="text-gray-600">Complete library inventory with copy management</p>
        </div>
        <div className="flex space-x-4">
          <Link to="/librarian/add-book">
            <ButtonComponent cssClass="e-primary">+ Add New Book</ButtonComponent>
          </Link>
          <Link to="/librarian/add-book-copy">
            <ButtonComponent cssClass="e-outline">+ Add Copy</ButtonComponent>
          </Link>
        </div>
      </div>

      {/* Inventory Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <StatsCard title="Total Books" value={247} color="gray" />
        <StatsCard title="Total Copies" value={456} color="blue" />
        <StatsCard title="Available" value={158} color="green" />
        <StatsCard title="Currently Issued" value={89} color="red" />
        <StatsCard title="Rack Locations" value={8} color="purple" />
      </div>

      {/* Filters Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Books</label>
            <TextBoxComponent 
              placeholder="Title, author, or ISBN..."
              change={(e) => handleSearch(e.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <DropDownListComponent 
              dataSource={subjectOptions}
              fields={{ text: 'text', value: 'value' }}
              value="all"
              placeholder="All Subjects"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
            <DropDownListComponent 
              dataSource={availabilityOptions}
              fields={{ text: 'text', value: 'value' }}
              value="all"
              placeholder="All Books"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rack Location</label>
            <DropDownListComponent 
              dataSource={rackOptions}
              fields={{ text: 'text', value: 'value' }}
              value="all"
              placeholder="All Racks"
            />
          </div>
          <div>
            <ButtonComponent cssClass="e-primary" onClick={() => console.log('Apply filters')}>
              Apply Filters
            </ButtonComponent>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Library Catalog</h2>
          <span className="text-sm text-gray-500">Showing {filteredBooks.length} books</span>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id}>
                {bookTemplate(book)}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-500">Showing 1-{filteredBooks.length} of {books.length} books</div>
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

export default BooksCatalog;