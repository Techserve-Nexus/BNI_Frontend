import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 *
 * @param inputs - Class values to merge
 * @returns Merged class string
 *
 * @example
 * cn("text-red-500", "bg-blue-500") // "text-red-500 bg-blue-500"
 * cn("text-red-500", { "bg-blue-500": true }) // "text-red-500 bg-blue-500"
 * cn("p-4", "p-8") // "p-8" (tailwind-merge removes conflicts)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
