import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function formatDate(input) {
  const date = typeof input === 'string' ? new Date(input) : input;
  
  // Get day of the week
  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  
  // Get day of the month with ordinal indicator
  const dayOfMonth = date.getDate();
  const ordinalIndicator = getOrdinalIndicator(dayOfMonth);
  
  // Get month abbreviation
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  
  // Format the date
  return `${dayOfWeek} ${dayOfMonth}${ordinalIndicator} ${month}`;
}

// Helper function to get ordinal indicator
function getOrdinalIndicator(day) {
  if (day > 10 && day < 14) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

