"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/app/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const target = event.target as typeof event.target & {
        search: { value: string };
      };
      const search = target.search.value;
      router.push(`/dishes/search?q=${search}`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type={type}
          name="search"
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-m ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-100 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",
            className
          )}
          ref={ref}
          {...props}
        />
      </form>
    );
  }
);
Input.displayName = "Input";

export { Input };
