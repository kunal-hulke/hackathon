export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  paymentStatus: 'current' | 'due' | 'overdue';
  lastPayment?: string;
  nextDueDate?: string;
  booksIssued: number;
  outstandingFines: number;
  status: 'active' | 'inactive' | 'suspended';
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  subject: string;
  price: number;
  description?: string;
  totalCopies: number;
  availableCopies: number;
  issuedCopies: number;
  addedDate: string;
}

export interface BookCopy {
  id: string;
  bookId: string;
  copyNumber: string;
  rackLocation: string;
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  status: 'available' | 'issued' | 'maintenance';
  addedDate: string;
  lastBorrowed?: string;
  notes?: string;
}

export interface IssueRecord {
  id: string;
  memberId: string;
  bookId: string;
  copyId: string;
  issueDate: string;
  dueDate: string;
  returnDate?: string;
  status: 'current' | 'returned' | 'overdue';
  fineAmount: number;
  finePaid: boolean;
}

export interface Payment {
  id: string;
  memberId: string;
  amount: number;
  type: 'fee' | 'fine' | 'both';
  method: 'cash' | 'card' | 'upi' | 'netbanking';
  date: string;
  receiptNumber: string;
  description?: string;
}

export interface DashboardStats {
  totalBooks: number;
  totalMembers: number;
  currentlyIssued: number;
  availableCopies: number;
  overdueBooks: number;
  todayCollections: number;
  pendingFines: number;
  newMembersThisMonth: number;
}