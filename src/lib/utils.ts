import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatDateTime(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(date));
}

export function calculateServings(packSize: number, quantity: number): number {
  return packSize * quantity;
}

export function getSpiceLevelLabel(level: string): string {
  const labels: Record<string, string> = {
    MILD: '🌶️ Mild',
    MEDIUM: '🌶️🌶️ Medium',
    HOT: '🌶️🌶️🌶️ Hot',
    EXTRA_HOT: '🌶️🌶️🌶️🌶️ Extra Hot',
  };
  return labels[level] || level;
}

export function getOrderStatusColor(status: string): string {
  const colors: Record<string, string> = {
    PENDING: 'bg-yellow-100 text-yellow-800',
    CONFIRMED: 'bg-blue-100 text-blue-800',
    PREPARING: 'bg-purple-100 text-purple-800',
    COMPLETED: 'bg-green-100 text-green-800',
    CANCELLED: 'bg-red-100 text-red-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
}

export function getPaymentStatusColor(status: string): string {
  const colors: Record<string, string> = {
    PENDING: 'bg-yellow-100 text-yellow-800',
    DEPOSIT_PAID: 'bg-blue-100 text-blue-800',
    PAID: 'bg-green-100 text-green-800',
    REFUNDED: 'bg-red-100 text-red-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
}

export function validateEventDate(date: Date): boolean {
  const now = new Date();
  const minDate = new Date(now.getTime() + 48 * 60 * 60 * 1000);
  return date >= minDate;
}

export function getRecommendedItemCounts(guestCount: number) {
  return {
    appetizers: Math.ceil(guestCount / 40),
    mains: Math.ceil(guestCount / 30),
    breads: Math.ceil(guestCount / 25),
    desserts: Math.ceil(guestCount / 50),
  };
}
