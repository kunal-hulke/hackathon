import { Member, Book, BookCopy, IssueRecord, Payment, DashboardStats } from '../types';

export const mockMembers: Member[] = [
  {
    id: 'LIB001234',
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+91 9876543210',
    joinDate: '2023-01-15',
    paymentStatus: 'current',
    lastPayment: '2025-07-30',
    nextDueDate: '2025-08-30',
    booksIssued: 2,
    outstandingFines: 0,
    status: 'active'
  },
  {
    id: 'LIB001235',
    name: 'Alice Smith',
    email: 'alice.smith@email.com',
    phone: '+91 9876543211',
    joinDate: '2025-07-28',
    paymentStatus: 'current',
    lastPayment: '2025-07-28',
    nextDueDate: '2025-08-28',
    booksIssued: 1,
    outstandingFines: 0,
    status: 'active'
  },
  {
    id: 'LIB001025',
    name: 'Robert Johnson',
    email: 'robert.j@email.com',
    phone: '+91 9876543212',
    joinDate: '2024-03-10',
    paymentStatus: 'overdue',
    lastPayment: '2025-06-03',
    nextDueDate: '2025-07-03',
    booksIssued: 2,
    outstandingFines: 140,
    status: 'active'
  },
  {
    id: 'LIB001087',
    name: 'Maria Garcia',
    email: 'maria.garcia@email.com',
    phone: '+91 9876543213',
    joinDate: '2024-02-20',
    paymentStatus: 'overdue',
    lastPayment: '2025-06-20',
    nextDueDate: '2025-07-20',
    booksIssued: 1,
    outstandingFines: 80,
    status: 'active'
  },
  {
    id: 'LIB001156',
    name: 'David Wilson',
    email: 'david.wilson@email.com',
    phone: '+91 9876543214',
    joinDate: '2024-06-15',
    paymentStatus: 'due',
    lastPayment: '2025-07-15',
    nextDueDate: '2025-08-15',
    booksIssued: 0,
    outstandingFines: 0,
    status: 'active'
  }
];

export const mockBooks: Book[] = [
  {
    id: 'BK001',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    isbn: '978-0132350884',
    subject: 'Programming',
    price: 2499,
    description: 'Even bad code can function. But if code isn\'t clean, it can bring a development organization to its knees.',
    totalCopies: 5,
    availableCopies: 3,
    issuedCopies: 2,
    addedDate: '2023-01-15'
  },
  {
    id: 'BK002',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    isbn: '978-0201616224',
    subject: 'Programming',
    price: 1899,
    description: 'Your journey to mastery in software development.',
    totalCopies: 3,
    availableCopies: 1,
    issuedCopies: 2,
    addedDate: '2023-02-10'
  },
  {
    id: 'BK003',
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    author: 'Gang of Four',
    isbn: '978-0201633612',
    subject: 'Programming',
    price: 3299,
    description: 'Capturing a wealth of experience about the design of object-oriented software.',
    totalCopies: 4,
    availableCopies: 0,
    issuedCopies: 4,
    addedDate: '2023-03-05'
  },
  {
    id: 'BK004',
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    isbn: '978-0596517748',
    subject: 'Programming',
    price: 1599,
    description: 'A deep dive into the good parts of JavaScript.',
    totalCopies: 6,
    availableCopies: 4,
    issuedCopies: 2,
    addedDate: '2023-04-12'
  }
];

export const mockBookCopies: BookCopy[] = [
  {
    id: 'CP001',
    bookId: 'BK001',
    copyNumber: '001',
    rackLocation: 'Rack 2',
    condition: 'good',
    status: 'available',
    addedDate: '2023-01-15',
    lastBorrowed: '2025-07-10'
  },
  {
    id: 'CP002',
    bookId: 'BK001',
    copyNumber: '002',
    rackLocation: 'Rack 2',
    condition: 'excellent',
    status: 'available',
    addedDate: '2023-01-15'
  },
  {
    id: 'CP003',
    bookId: 'BK001',
    copyNumber: '003',
    rackLocation: 'Rack 2',
    condition: 'good',
    status: 'available',
    addedDate: '2024-03-10',
    lastBorrowed: '2025-06-05'
  },
  {
    id: 'CP004',
    bookId: 'BK001',
    copyNumber: '004',
    rackLocation: 'Rack 2',
    condition: 'good',
    status: 'issued',
    addedDate: '2023-01-15',
    lastBorrowed: '2025-08-03'
  },
  {
    id: 'CP005',
    bookId: 'BK001',
    copyNumber: '005',
    rackLocation: 'Rack 2',
    condition: 'good',
    status: 'issued',
    addedDate: '2023-01-15',
    lastBorrowed: '2025-07-29'
  }
];

export const mockIssueRecords: IssueRecord[] = [
  {
    id: 'ISS001',
    memberId: 'LIB001234',
    bookId: 'BK001',
    copyId: 'CP004',
    issueDate: '2025-08-03',
    dueDate: '2025-08-10',
    status: 'current',
    fineAmount: 0,
    finePaid: false
  },
  {
    id: 'ISS002',
    memberId: 'LIB001235',
    bookId: 'BK002',
    copyId: 'CP006',
    issueDate: '2025-08-01',
    dueDate: '2025-08-08',
    status: 'current',
    fineAmount: 0,
    finePaid: false
  },
  {
    id: 'ISS003',
    memberId: 'LIB001025',
    bookId: 'BK003',
    copyId: 'CP007',
    issueDate: '2025-07-15',
    dueDate: '2025-07-22',
    returnDate: '2025-08-01',
    status: 'returned',
    fineAmount: 50,
    finePaid: true
  }
];

export const mockPayments: Payment[] = [
  {
    id: 'PAY001',
    memberId: 'LIB001025',
    amount: 640,
    type: 'both',
    method: 'cash',
    date: '2025-08-03',
    receiptNumber: 'RCP202508030001',
    description: 'Monthly Fee + Fine'
  },
  {
    id: 'PAY002',
    memberId: 'LIB001087',
    amount: 80,
    type: 'fine',
    method: 'upi',
    date: '2025-08-03',
    receiptNumber: 'RCP202508030002',
    description: 'Late Return Fine'
  },
  {
    id: 'PAY003',
    memberId: 'LIB001298',
    amount: 500,
    type: 'fee',
    method: 'card',
    date: '2025-08-03',
    receiptNumber: 'RCP202508030003',
    description: 'Monthly Membership Fee'
  }
];

export const mockDashboardStats: DashboardStats = {
  totalBooks: 247,
  totalMembers: 45,
  currentlyIssued: 89,
  availableCopies: 158,
  overdueBooks: 8,
  todayCollections: 2850,
  pendingFines: 485,
  newMembersThisMonth: 2
};

export const subjects = [
  'Programming',
  'Science',
  'Mathematics',
  'Literature',
  'History',
  'Philosophy',
  'Business',
  'Arts',
  'Other'
];

export const rackLocations = [
  'Rack 1',
  'Rack 2',
  'Rack 3',
  'Rack 4',
  'Rack 5',
  'Rack 6',
  'Rack 7',
  'Rack 8'
];