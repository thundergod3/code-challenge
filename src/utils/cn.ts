import { twMerge } from "tailwind-merge";
import cx from "classnames";

export function cn(...inputs: any) {
  return twMerge(cx(inputs));
}
