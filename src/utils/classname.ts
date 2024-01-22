import { twMerge } from "tailwind-merge";

/**
 * takes in a list of strings and returns a string of classnames
 */
export const cn = (...args: (string | boolean | undefined | null)[]) => {
  return twMerge(args.filter(Boolean).join(" "));
};
