/**
 * Generates a time-based ID with the format: AA010101
 * - First letter: Year (A=2025, B=2026, etc.)
 * - Second letter: Month (A=Jan, B=Feb, etc.)
 * - Next two digits: Day (01-31)
 * - Next two digits: Hour (00-23)
 * - Last two digits: Minute (00-59)
 * 
 * @returns A time-based ID string
 */
export function generateTimeBasedId(): string {
    const now = new Date();
    const yearBase = 2025;
    const currentYear = now.getFullYear();
    const yearChar = String.fromCharCode('A'.charCodeAt(0) + (currentYear - yearBase));
    const monthChar = String.fromCharCode('A'.charCodeAt(0) + now.getMonth());
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    return `${yearChar}${monthChar}${day}${hour}${minute}`;
  }