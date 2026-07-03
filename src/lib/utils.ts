import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional class names and merges Tailwind CSS classes.
 *
 * Example:
 * cn("p-4", isActive && "bg-primary")
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}